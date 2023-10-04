import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ToastAction } from "../ui/toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import useInvite from '@/utils/invite-to-community'



export default function CreateCommunity() {
    const { toast } = useToast()
    const invite = useInvite()
    const router = useRouter()
    const [showInvite, setShowInvite] = useState(false)
    const [InviteResponse, setInviteResponse] = useState<string>("")


    const formSchema = z.object({
        communityName: z.string().min(3, {
            message: "Community name must be at least 3 characters"
        }),
        description: z.string().min(3, {
            message: "Description must be at least 3 characters long "
        }),
        inviteUrl: z.string()

    })



    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            communityName: "",
            description: "",
            inviteUrl: `${uuidv4()}`
        },
    })


    const inviteUrl = (id: string) => {

        return invite(id)
    }

    // onSubmit
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await axios.post('/api/community', values)

        router.refresh()
        form.reset()


        if (response.data) {
            setShowInvite(true)
            setInviteResponse(response.data.inviteUrl)
            inviteUrl(response?.data?.inviteUrl)


        }


    }



    return (
        <div  >
            <AlertDialog >
                <AlertDialogTrigger className="rounded-md border px-4 py-3 font-mono text-sm">Create</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        {showInvite && (<AlertDialogTitle onClick={() => inviteUrl(InviteResponse)} >{showInvite && "click here Join community"}  </AlertDialogTitle>)}
                        <AlertDialogTitle  >{!showInvite && "Create a community"}  </AlertDialogTitle>
                        <AlertDialogDescription>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="communityName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Community name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Write a description for your community" {...field} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit">Submit</Button>

                                </form>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </Form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}
