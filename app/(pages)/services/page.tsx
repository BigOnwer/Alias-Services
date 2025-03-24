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
                description="Find out how your company's results are going"
                imageSrc={DashboardExemple}
                buttonPush={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID as string}
                />
                <ServicesComponent
                title="Creation of Websites"
                description="Creating of Web Sites destined for business"
                imageSrc={creattingWebSite}
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