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
                    <Services title='Business Dashboard ⚙️' description="At Alias ​​Services, in addition to the complete business dashboard service that already offers real-time visualization of company statistics, profits, losses and total income, as well as best-selling products, you could..." buttonPush="/services/dashboard"/>

                    <Services title='Creation of Websites 🌐'  description="A chatbot for businesses on WhatsApp automates customer service by answering frequently asked questions, processing orders, and providing 24/7 support. It improves efficiency, reduces..." buttonPush="/services/sites"/>
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