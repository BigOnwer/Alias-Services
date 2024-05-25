import { Header } from "@/components/Header";
import { Subscribe } from '../components/Subscribe';
import { Services } from "@/components/ServicesCard";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <header>
        <Header currentPage="home"/>
      </header>
      <br /><br /><br />
      <main>
        <Subscribe/>
        <div className="flex justify-center">
          <Services title='Integration with WhatsApp 💬' description="At Alias ​​Services we have an entire support system integrated with WhatsApp. Are you tired of having to respond to your customers all the time? Or are you already losing your mind? Here is a good solution, using Chat Bot we will automate your entire service, making it possible to even make appointments or other various functions" buttonPush="/services/chatbot"/>

          <Services title='Creation of Websites 🌐'  description="At Alias ​​​​Services, in addition to the integration of support Chat Bots for WhatsApp, we also have the creation of Websites for your company, so that in addition to automating many tasks, your customers can do everything from home in a more practical way. Furthermore, within the creation of Sites you will have access to a management panel, which will show your sa..." buttonPush="/services/websites"/>
        </div>
      </main>
      <br /><br /><br />
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
