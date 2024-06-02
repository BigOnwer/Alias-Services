import { ServicesComponent } from "../Services";
import { HeaderDash } from "./Header";
import ChatBotExemple from '@/assets/chatBotExemple.png';
import creattingWebSite from '@/assets/creatingSite.png';

export function Buy() {
    return(
        <div>
            <br /><br /><br /><br />
            <main className="flex justify-center ">
                <ServicesComponent
                title="Integration with WhatsApp"
                description="Bot of support destined for WhatsApp"
                imageSrc={ChatBotExemple}
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
        </div>
    )
}