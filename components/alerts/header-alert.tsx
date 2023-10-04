import { Button } from "@/components/ui/button";
import CreateAlert from "./create-alert";

export default function HeaderAlert() {
    return (
        <div className="mt-4 text-center">
            <h1 className="text-2xl">Alert</h1>

            <div className="flex flex-row w-full justify-between items-center">
                {/* <div>
                    <ul className="flex space-x-4 mx-16 md:mx-0">
                        <li className="cursor-pointer border-b">Active Alerts</li>
                        <li className="cursor-pointer border-b">Archived Alerts</li>
                    </ul>

                </div> */}
                <div className="mx-3">
                    <CreateAlert />
                </div>
            </div>


        </div>

    )
}
