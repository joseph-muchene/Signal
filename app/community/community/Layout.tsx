

import SideNavigation from "@/components/navigation/side-navigation";


export default function AlertLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex space-x-4 flex-">
            <div className="hidden lg:block w-[150px]">
                <SideNavigation />
            </div>

            <div className="overflow-auto h-screen  ">
                {children}
            </div>
        </div>
    )
}