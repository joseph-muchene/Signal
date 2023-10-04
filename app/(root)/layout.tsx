

import { Extras } from "@/components/extra/Main";
import SideNavigation from "@/components/navigation/side-navigation";
import CreateProfile from "../(auth)/initial-profile";
import BottomNav from "@/components/navigation/BottomNav";



export default function RootLayout({ children }: { children: React.ReactNode }) {
    const authData = CreateProfile()

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-3">

            <div className="hidden lg:block w-[96px]">
                <SideNavigation />
            </div>

            <div className="overflow-auto h-screen xl:ml-[-120px] ">
                {children}
            </div>

             <div className="mt-16 mx-2 hidden lg:block">
              <h1 className="text-center">COMING SOON!</h1>
            </div> 

            <BottomNav />
        </div>
    )
}
