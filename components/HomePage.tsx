import { Footer } from "./Footer";
import { Header } from "./Header";
import { Services } from "./ServicesCard";
import { Subscribe } from "./Subscribe";

export function HomePage() {
    return(
        <div>
            <header>
                <Header currentPage="home"/>
            </header>
        <br /><br /><br />
        <main>
            <Subscribe/>
            <div className="flex justify-center">
                <Services title='Business Dashboard ⚙️' description="At Alias ​​Services, in addition to the complete business dashboard service that already offers real-time visualization of company statistics, profits, losses and total income, as well as best-selling products, you could consider adding the following functionalities to further enrich your service: predictive analysis, personalized alerts, integration with social netw..." buttonPush="/services/chatbot"/>

                <Services title='Creation of Websites 🌐'  description="At Alias ​​​​Services, in addition to the integration of support Chat Bots for WhatsApp, we also have the creation of Websites for your company, so that in addition to automating many tasks, your customers can do everything from home in a more practical way. Furthermore, within the creation of Sites you will have access to a management panel, which will show your sa..." buttonPush="/services/websites"/>
            </div>
        </main>
            <br /><br /><br />
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}