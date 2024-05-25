import { PageProduct } from "@/components/PageProduct";
import ImageChatBotPhone from '@/assets/chatBotExemple.png'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ChatBot() {
    return(
        <div>
            <header>
                <Header currentPage="services"/>
            </header>
            <br /><br /><br /><br /><br />
            <main>
                <PageProduct
                    title="Integration with WhatsApp 💬"
                    description="Our Customer Support Chatbot on WhatsApp is an intelligent tool that offers quick and efficient assistance. It resolves queries, provides information about products and services, checks order status, offers technical support, facilitates appointments, manages exchanges and returns, and answers questions about payments. Available 24/7, it delivers instant responses, reducing wait times and increasing customer satisfaction. Simple and intuitive, the chatbot automates repetitive tasks, allowing the human team to focus on more complex issues. Designed to enhance the customer experience, our chatbot ensures you are always well-attended and confident in our ability to meet your needs."
                    buttonText="Buy"
                    buttonLink="#"
                    image={ImageChatBotPhone}
                />
            </main>
            <br /><br /><br />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}