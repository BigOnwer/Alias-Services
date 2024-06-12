import { Button } from "./ui/button";

interface Props{
    title: string
    description: string
    buttonPush: string
}

export function Services({ title, description, buttonPush}: Props) {
    return (
        <section className="w-80 p-3">
            <div className="bg-white dark:bg-black p-4 border dark:border-white rounded-3xl shadow-md text-center">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">{title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
                <a href={buttonPush}> <Button>Learn More</Button> </a>
            </div>
        </section>
    );
}
