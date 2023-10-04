import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { CollapsibleItem } from "./collapsible";
import Link from "next/link";

export default function SideNavigation() {
    return (


        <aside

            className=" top-0 left-0 z-40 w-40 h-screen "

        >
            <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    {/* <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ml-3">Discover</span>
                        </a>
                    </li> */}
{/* 
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Notifications
                            </span>
                        </a>
                    </li> */}

                    <li>
                        <Link
                            href="/alert"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ml-3">Alert</span>
                        </Link>
                    </li>

                    <li>
                        <CollapsibleItem />
                    </li>

                    <li className="absolute bottom-10 items-center flex justify-center">
                        <UserButton afterSignOutUrl="/" />
                    </li>
                </ul>
            </div>
        </aside>


    );
}
