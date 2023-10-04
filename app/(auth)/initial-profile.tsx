import { prisma } from "@/lib/prisma";
import Auth from '@/utils/auth.current.user'
import { redirectToSignIn } from "@clerk/nextjs";
export default async function CreateProfile() {

    const user = await Auth()
  
    //    check if the profile exists
    if (!user) {
        return redirectToSignIn()
    }


    const profile = await prisma.profile.findUnique({
        where: {
            userId: user.id
        }
    })


    if (profile) return profile



    const newProfile = await prisma.profile.create({
        data: {
            userId: user.id,
            name: user?.firstName + " " + user?.lastName,
            profileImage: user?.imageUrl as any,
        }
    })


    return newProfile



}