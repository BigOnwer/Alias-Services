import { ServicesComponent } from "../Services";
import { HeaderDash } from "./Header";
import DashboardExemple from '@/assets/dashboardExemple.png';
import creattingWebSite from '@/assets/creatingSite.png';

export function Buy() {
    return(
        <div>
            <br /><br /><br /><br />
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
                buttonPush="#"
                />
            </main>
        </div>
    )
}