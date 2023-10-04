
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AvatarComponent from "../avatar"
import Image from "next/image"
import { $Enums, Post, Profile } from "@prisma/client"
import { ReactNode, useState } from "react"


interface Props {
    post:
    {
        id: string;
        username: string;
        profileId: string;
        content: string;
        postType: $Enums.PostType;
        media: string | null;
        communityId: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {

            "profileImage": string,
            "name": string,
        }

    }
}

export default function StatusCard({ post }: Props) {



    // Regex pattern to match common video file extensions
    const videoExtensions = /\/([^\/]+)\.mp4\?alt=media&token=[\w-]+$/;



    function isVideoURL(url: string) {

        return videoExtensions.test(url);
    }



    return (
        <Card className="w-96 ">
            <CardHeader >
                <div className="flex flex-row space-x-2 items-center">
                    <div>
                        <AvatarComponent profile={post.user} />
                    </div>
                    <div>
                        <CardTitle>{post?.username}
                        </CardTitle>

                    </div>

                </div>

            </CardHeader>
            <CardContent>

                {post.content}

                {post.media ? (
                    isVideoURL(post.media) ? (
                        <video  controls className="rounded-lg" width="900" height="900">
                            <source src={post.media} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <Image  className="rounded-lg" alt="status-image" height="900" width="900" src={post.media} />
                    )
                ) : null}

            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>

    )
}
