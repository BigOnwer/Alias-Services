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
            <main className="flex justify-center ">
            <ServicesComponent
                title="Business Dashboard"
                description="Find out how your company's results are going"
                imageSrc={DashboardExemple}
                buttonLabel="Buy"
                buttonPush="https://buy.stripe.com/14k9CCahQdhS3KM000"
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