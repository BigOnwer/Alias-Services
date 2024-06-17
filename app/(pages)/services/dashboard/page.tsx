import { PageProduct } from "@/components/PageProduct";
import DashboardExample from '@/assets/dashboardExemple.png'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function ChatBot() {
    return(
        <div>
            <header>
                <Header currentPage="services"/>
            </header>
            <br /><br /><br /><br /><br />
            <main>
                <PageProduct
                    title="Business Dashboard ⚙️"
                    description="At Alias ​​Services, in addition to the complete business dashboard service that already offers real-time visualization of company statistics, profits, losses and total income, as well as best-selling products, you could consider adding the following functionalities to further enrich your service: predictive analysis, personalized alerts, integration with social networks, automated reports, inventory control and customer segmentation. These additions can provide a more comprehensive view of the business and drive growth through data-driven insights."
                    buttonText="Buy"
                    buttonLink="#"
                    image={DashboardExample}
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