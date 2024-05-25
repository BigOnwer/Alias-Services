interface Props{
    title: string
    description: string
    buttonPush: string
}

export function Services({ title, description, buttonPush}: Props) {
    return (
        <section className="w-80 p-3 bg-white">
            <div className="bg-white p-4 border rounded-3xl shadow-md text-center">
                <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <a href={buttonPush} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Learn More</a>
            </div>
        </section>
    );
}
