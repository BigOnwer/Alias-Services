import { PageProduct } from "@/components/PageProduct";
import ImageCreatingWebSite from '@/assets/creatingSite.png'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function WebSites() {
    return(
        <div>
            <header>
                <Header currentPage="services"/>
            </header>
            <br /><br /><br /><br /><br />
            <main>
                <PageProduct
                    title="Creation of Websites 🌐"
                    description="Hello! We offer a comprehensive website creation service that includes custom design, responsive development, SEO optimization, social media integration, customized functionalities, and ongoing support. Our goal is to strengthen your digital presence with a website that seamlessly operates on any device, is easily found on search engines, and enables effective engagement with your followers. With a dedicated and experienced team, we are ready to help you achieve your online goals. Get in touch with us to turn your vision into reality, taking your brand to new heights online!"
                    buttonText="Buy"
                    buttonLink="#"
                    image={ImageCreatingWebSite}
                />
            </main>
            <br /><br /><br />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}