import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    image: any
}

export function PageProduct({ title, description, buttonText, buttonLink, image }: Props) {
    return (
        <div className="m-4 sm:m-8">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex justify-center items-center mb-4 sm:mb-0 sm:w-1/3">
                    <Image src={image} alt="" className="w-full" />
                </div>
                <div className="sm:w-1/2">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                        {title}
                    </h2>
                    <p className="mb-4">
                        {description}
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <a href={buttonLink}>
                    <Button className="w-full text-lg">{buttonText}</Button>
                </a>
            </div>
        </div>
    )
}
