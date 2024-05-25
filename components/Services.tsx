import Image from "next/image"
import { Button } from "./ui/button"

interface Props{
    title: string
    description: string
    imageSrc: any
    buttonLabel: string
    buttonPush: string
}

export function ServicesComponent({ title, description, buttonPush, imageSrc, buttonLabel}: Props) {
    return (
        <div className="border rounded-lg shadow-lg p-4 w-80 mx-5">
            <Image src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <p className="text-gray-600 my-5">{description}</p>
            <a href={buttonPush}><Button className="w-full">{buttonLabel}</Button></a>
        </div>
    );
}