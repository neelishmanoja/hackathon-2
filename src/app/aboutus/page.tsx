import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "./components/abouthero";
import Main from "./components/aboutmain";
import Menu from "./components/aboutmenu";
import Testimonials from "./components/abouttestimonials";
import Team from "./components/team";

export default function Aboutus(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Main/>
            <Team/>
            <Testimonials/>
            <Menu/>
            <Footer/>
        </div>
    )
}