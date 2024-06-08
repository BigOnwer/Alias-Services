import { Footer } from "./Footer";
import { Header } from "./Header";
import { Button } from "./ui/button";

export function NotAuth() {
    return(
        <div>
            <Header currentPage="home"/>
            <div>
                <h1>Falta so fazer login primeiro</h1>
                <h1>:(</h1>
                <Button><a href="">Fazer Login</a></Button>
            </div>
            <br /><br /><br /><br />
            <Footer/>
        </div>
    )
}