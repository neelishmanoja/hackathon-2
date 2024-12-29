import Footer from "../components/footer";
import Header from "../components/header";
import Dessert from "./components/dessert";
import Drinks from "./components/drinks";
import Maincourse from "./components/maincourse";
import Hero from "./components/menuhero";
import Partners from "./components/partners";
import Starter from "./components/starter";

export default function Menu(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Starter/>
            <Maincourse/>
            <Dessert/>
            <Drinks/>
            <Partners/>
            <Footer/>
        </div>
    )
}