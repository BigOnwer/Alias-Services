import { Button } from "./ui/button";

interface Props{
    title: string
    description: string
    buttonPush: string
}

export function Services({ title, description, buttonPush}: Props) {
    return (
        <section className="w-80 p-3">
            <div className="bg-white p-4 border rounded-3xl shadow-md text-center">
                <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <a href={buttonPush}> <Button>Learn More</Button> </a>
            </div>
        </section>
    );
}
