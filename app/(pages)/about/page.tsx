import Image from "next/image"
import coperation from "@/assets/coperation.jpg"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function About() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header>
                <Header currentPage="about"/>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About us</h1>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                            We are a company dedicated to providing innovative and high-quality solutions to our customers. Our mission is to transform the way companies operate, driving success through advanced technology and personalized services.
                        </p>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                            Founded in 2023, the company has grown rapidly, becoming a reference in the market. Our commitment to excellence and innovation has allowed us to earn the trust of customers across the country.
                        </p>
                    </div>
                    <div>
                        <Image
                        src={coperation}
                        width="550"
                        height="310"
                        alt="About"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        />
                    </div>
                    </div>
                </div>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}