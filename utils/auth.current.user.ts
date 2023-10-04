
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/api'

export default async function Auth() {
    const user: User | null = await currentUser()

    if (!user) return

    return user
}