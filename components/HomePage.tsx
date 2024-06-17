import { Footer } from "./Footer";
import { Header } from "./Header";
import { Services } from "./ServicesCard";
import { Subscribe } from "./Subscribe";
import { Separator } from "./ui/separator";

export function HomePage() {
    return(
        <div className="">
            <header>
                <Header currentPage="home"/>
            </header>
            <br /><br /><br />
            <main>
                <Subscribe/>
                <div className="flex justify-center flex-wrap gap-3">
                    <Services title='Business Dashboard ⚙️' description="At Alias ​​Services, in addition to the complete business dashboard service that already offers real-time visualization of company statistics, profits, losses and total income, as well as best-selling products, you could consider adding the following functionalities to further enrich your service: predictive analysis, personalized alerts, integration with social netw..." buttonPush="/services/dashboard"/>

                    <Services title='Creation of Websites 🌐'  description="At Alias ​​​​Services, in addition to the integration of support Chat Bots for WhatsApp, we also have the creation of Websites for your company, so that in addition to automating many tasks, your customers can do everything from home in a more practical way. Furthermore, within the creation of Sites you will have access to a management panel, which will show your sa..." buttonPush="/services/sites"/>
                </div>
            </main>
                <br /><br /><br />
                <Separator/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}