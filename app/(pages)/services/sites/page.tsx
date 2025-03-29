import { PageProduct } from "@/components/PageProduct";
import ImageCreatingWebSite from '@/assets/creatingSite.png'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function WebSites() {
    return(
        <div>
            <header>
                <Header currentPage="services"/>
            </header>
            <br /><br /><br /><br /><br />
            <main>
                <PageProduct
                    title="Creation of Websites 🌐"
                    description="A chatbot for businesses on WhatsApp automates customer service by answering frequently asked questions, processing orders, and providing 24/7 support. It improves efficiency, reduces costs, and streamlines communication, ensuring a fast and personalized experience for customers."
                    buttonText="Buy"
                    buttonLink="#"
                    image={ImageCreatingWebSite}
                />
            </main>
            <br /><br /><br />
            <Separator/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}