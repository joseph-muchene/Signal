
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


type Prop = {
    profile: {

        "profileImage": string,
        "name": string,
    }
}

export default function AvatarComponent({ profile }: Prop) {


    return (
        <Avatar>
            <AvatarImage src={profile ? profile.profileImage : ""} alt="@shadcn" />
            <AvatarFallback>{profile ? profile.name : ""}</AvatarFallback>
        </Avatar>
    )
}
