import Image from "next/image";

interface Props {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    image: any
}

export function PageProduct({title, description, buttonText, buttonLink, image}: Props) {
    return (
        <div className="m-8">
            <div className="flex justify-between">
                <div className="flex justify-center items-center mb-4 w-1/3">
                    <Image src={image} alt="" className="w-full" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                    {title}
                    </h2>
                    <p className="mb-4">
                    {description}
                    </p>
                </div>
            </div>
            <br /><br />
            <a href={buttonLink}>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">{buttonText}</button>
            </a>
        </div>
    )
}