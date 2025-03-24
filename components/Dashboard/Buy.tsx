import { ServicesComponent } from "../Services";
import DashboardExemple from '@/assets/dashboardExemple.png';
import creattingWebSite from '@/assets/creatingSite.png';

export function Buy() {
    return(
        <div className="h-screen flex items-center justify-center w-full">
            <main className="flex justify-center flex-wrap gap-2">
                <ServicesComponent
                title="Business Dashboard"
                description="Find out how your company's results are going"
                imageSrc={DashboardExemple}
                buttonPush={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || ""}
                />
                <ServicesComponent
                title="Creation of Websites"
                description="Creating of Web Sites destined for business"
                imageSrc={creattingWebSite}
                buttonPush="#"
                />
            </main>
        </div>
    )
}