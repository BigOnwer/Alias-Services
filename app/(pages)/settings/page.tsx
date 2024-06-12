import { UpdateForm } from "./components/UpdateForm";
import { SidebarSettings } from "./components/SidebarSettings";
import { getCurrentUser } from "@/lib/session";
import { AuthProviderContext } from "@/Contexts/AuthContext";

export default async function Settings() {
    const session = await getCurrentUser()
    return(
        <div>
            <SidebarSettings currentPage="settings"/>
            <AuthProviderContext>
                <UpdateForm/>
            </AuthProviderContext>
        </div>
    )
}