"use client"

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

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import axios from "axios"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
export default function CreateAlert() {


    const formSchema = z.object({
        problem: z.string().min(2, {
            message: "Too short"
        })
        ,
        description: z.string().min(3, {
            message: "Description is too short!"
        }),

    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            problem: "",
            description: "",

        },
    })





    async function onSubmit(values: z.infer<typeof formSchema>) {
        let profile: any
        profile = localStorage.getItem('profile')

        const parseItemOnStorage = JSON.parse(profile)
        const profileId = parseItemOnStorage.id


        const object = { ...values, profileId }
        const response = await axios.post('/api/alert', object)


        return window.location.reload()

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-[#000] py-2 px-4 text-white rounded">create alert</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create an alert</AlertDialogTitle>
                    <AlertDialogDescription>
                        What is happening?
                    </AlertDialogDescription>
                </AlertDialogHeader>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="problem"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alert</FormLabel>
                                    <FormControl>
                                        <Input placeholder="what is happening" {...field} />
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
                                        <Input placeholder="description" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button type="submit" onClick={form.handleSubmit(onSubmit)} variant="ghost">Submit</Button>
                        </AlertDialogFooter>
                    </form>
                </Form>

            </AlertDialogContent>
        </AlertDialog>

    )
}
