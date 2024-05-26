import { AlertDialogDescription, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogCancel, AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";
import { Input } from "../ui/input";
import { Options } from "./Options";

export function ContentDialog() {
    function handleRegister() {
        console.log()
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                    <Button className='h-10'>New Value +</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-96">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>New Value</AlertDialogTitle>
                        <AlertDialogCancel className="border-0 "> <X/> </AlertDialogCancel>
                    </div>
                    <AlertDialogDescription>
                    Create new value for chart analysis
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogOverlay>
                    <form onSubmit={handleRegister}>
                        <Input type="text" placeholder="Name" />
                        <br />
                        <Input type="number" placeholder="Price" />
                        <br />
                        <Options/>
                        <br />
                        <Button type="submit" className="w-full">Register</Button>
                    </form>
                </AlertDialogOverlay>
            </AlertDialogContent>
        </AlertDialog>
    )
}