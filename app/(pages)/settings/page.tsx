import { UpdateForm } from "./components/UpdateForm";
import { SidebarSettings } from "./components/SidebarSettings";
import { getCurrentUser } from "@/lib/session";

export default async function Settings() {
    const session = await getCurrentUser()
    return(
        <div>
            <SidebarSettings currentPage="settings"/>
            <UpdateForm defaultValues={session}/>
        </div>
    )
}