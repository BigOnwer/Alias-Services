import { ServicesComponent } from "@/components/Services";
import ChatBotExemple from '@/assets/chatBotExemple.png'
import creattingWebSite from '@/assets/creatingSite.png'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alias Services - Services",
    description: "Page of services from Alias",
};

export default function Services() {
    return (
        <div className="">
            <header>
                <Header currentPage="services"/>
            </header>
            <br /><br /><br /><br /> <br /><br /><br />
            <main className="flex justify-center ">
                <ServicesComponent
                title="Integration with WhatsApp"
                description="Bot of support destined for WhatsApp"
                imageSrc={ChatBotExemple}
                buttonLabel="Buy"
                buttonPush="/login"
                />
                <ServicesComponent
                title="Creation of Websites"
                description="Creating of Web Sites destined for business"
                imageSrc={creattingWebSite}
                buttonLabel="Buy"
                buttonPush="/login"
                />
            </main>
            <br /><br /><br /><br />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}