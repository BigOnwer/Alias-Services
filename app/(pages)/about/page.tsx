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
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nós</h1>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                        Somos uma empresa dedicada a fornecer soluções inovadoras e de alta qualidade para nossos clientes.
                        Nossa missão é transformar a maneira como as empresas operam, impulsionando o sucesso através de
                        tecnologia avançada e serviços personalizados.
                        </p>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                        Fundada em 2023, a empresa cresceu rapidamente, tornando-se uma referência no mercado. Nosso
                        compromisso com a excelência e a inovação nos permitiu conquistar a confiança de clientes em todo o
                        país.
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