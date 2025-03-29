import { ServicesComponent } from "@/components/Services";
import DashboardExemple from '@/assets/dashboardExemple.png';
import creattingWebSite from '@/assets/creatingSite.png';
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
            <main className="flex justify-center flex-wrap">
                <ServicesComponent
                title="Business Dashboard"
                description="Find out how your company's results are going."
                imageSrc={DashboardExemple}
                price="70,00/m"
                buttonPush={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID as string}
                />
                <ServicesComponent
                title="Chat Bot for WhatsApp"
                description="Virtual assistant for your company via WhatsApp"
                price="30,00/m"
                imageSrc={creattingWebSite}
                />
            </main>
            <br /><br /><br /><br />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}