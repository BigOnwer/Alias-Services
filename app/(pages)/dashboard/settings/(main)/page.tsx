import { UpdateForm } from "../components/UpdateForm";
import { getCurrentUser } from "@/lib/session";
import { AuthProviderContext } from "@/Contexts/AuthContext";

export default async function Settings() {
    const session = await getCurrentUser()
    return(
        <div>
            <AuthProviderContext>
                <UpdateForm/>
            </AuthProviderContext>
        </div>
    )
}