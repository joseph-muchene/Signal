import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { CollapsibleItem } from "./collapsible";


export default function BottomNav() {
    return (

        <div className="w-full h-screen p-3">
            <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 p-3 bg-white shadow">
                    <div id="tabs" className="flex justify-between items-center">
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">

                            <span className="tab tab-home block text-xs">

                                <Link
                                    href="/"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <span className="ml-3">Home</span>
                                </Link>
                            </span>
                        </a>
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <Link
                                href="/alert"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ml-3">Alert</span>
                            </Link>
                        </a>
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">

                            <CollapsibleItem />
                        </a>
                        {/* <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">

                            <span>
                                Notifications
                            </span>
                        </a> */}

                        {/* <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <span>
                                Chat
                            </span>
                        </a> */}
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">

                            <UserButton afterSignOutUrl="/" />
                        </a>
                    </div>
                </section>
            </section>
        </div>

    )
}
