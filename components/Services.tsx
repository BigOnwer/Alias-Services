import Image from "next/image"

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
            <a href={buttonPush}><button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">{buttonLabel}</button></a>
        </div>
    );
}