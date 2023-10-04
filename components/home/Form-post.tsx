"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/lib/config'
import { VideoIcon, ImageIcon } from 'lucide-react'
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Profile } from '@prisma/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FormPost({ user,isCommunity,communityId }: { user: Profile, isCommunity: boolean,communityId:string }) {


    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<any>("")
    const [video, setVideo] = useState<any>("")
    const [file, setFile] = useState<any>("");
    const [media, setMedia] = useState<string>("")
    const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null)


    const formSchema = z.object({
        text: z.string().min(2, {
            message: "text is required",
        }),
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    })



    useEffect(() => {


        const storage = getStorage(app);


        let storageRef = ref(storage, 'file/' + file.name);

        setUploadSuccess(false)

        const uploadTask = uploadBytesResumable(storageRef, file);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUploadSuccess(true)
                    return setMedia(downloadURL)
                });
            }
        );


    }, [file])



    const onSubmit = async () => {

        try {
            setIsLoading(true)
            if (isCommunity && communityId) {
                const data = {
                    content: form.getValues("text"),
                    username: user?.name,
                    profileId: user?.id,
                    media: file === "" ? "" : media,
                    communityId: communityId



                }
                await axios.post('/api/post', data)
                window.location.reload()
            } else {
                const data = {
                    content: form.getValues("text"),
                    username: user?.name,
                    profileId: user?.id,
                    media: file === "" ? "" : media,
                }

                await axios.post('/api/post', data)
                window.location.reload()
            }


            setUploadSuccess(true)
            form.reset()

        } catch (error: unknown) {

            console.log('AN_ERROR_HAS_OCCURED')
        } finally {
            setIsLoading(false)
        }
    }



    const handleMediaUpload = (type: string) => {
        // Create a hidden file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        // Listen for the change event when a file is selected
        fileInput.addEventListener('change', (event: any) => {
            const selectedFile = event.target.files?.[0];

            if (selectedFile) {
                if (selectedFile.type.startsWith('image') && type === 'image') {
                    clearMedia()
                    const fileReader = new FileReader()
                    fileReader.onload = (fileEvent: any) => {
                        setImage(fileEvent.target.result)
                    }

                    fileReader.readAsDataURL(selectedFile)
                }

                if (selectedFile.type.startsWith('video') && type === 'video') {
                    clearMedia()
                    const fileReader = new FileReader()
                    fileReader.onload = (fileEvent: any) => {
                        setVideo(fileEvent.target.result)
                    }

                    fileReader.readAsDataURL(selectedFile)
                }
                setFile(selectedFile);


            }

            // Remove the file input element after use
            document.body.removeChild(fileInput);
        });

        // Trigger the file input dialog
        document.body.appendChild(fileInput);
        fileInput.click();

    }


    const clearMedia = () => {
        setImage("")
        setVideo("")
    }



    return (
        <div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Write something</FormLabel>
                                <FormControl>
                                    <Textarea className='resize-none outline-none border-none' placeholder="whats up joseph" {...field} />



                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    {/* media */}
                    <div className='relative mt-2'>
                        {image.length > 0 && (<button onClick={clearMedia} className='absolute top-0 right-0 bg-[#a13b3b] text-white p-3 z-10 rounded-full'>X</button>)}
                        {video.length > 0 && (<button onClick={clearMedia} className='absolute top-0 right-0 bg-[#a13b3b] text-white p-3 z-10 rounded-full'>X</button>)}
                        {image.length > 0 && (
                            <Image alt='image' src={image} height={900} width={900} />
                        )}

                        {video.length > 0 && (
                            <video
                                controls
                                src={video}

                            />
                        )}
                    </div>




                    <div className="flex flex-row items-center justify-between mt-4" >
                        <div className="flex flex-row space-x-5  mx-3 items-center justify-center ">


                            <VideoIcon onClick={() => handleMediaUpload('video')} className='cursor-pointer' />

                            <div>
                                |
                            </div>
                            <ImageIcon onClick={() => handleMediaUpload('image')} className="cursor-pointer" />
                        </div>

                        <div >
                            <Button disabled={uploadSuccess === true ? false : true} className="rounded-lg" variant={"outline"}>{isLoading ? "...Loading" : "Publish"}</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
