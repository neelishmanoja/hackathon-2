
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "./components/bloghero";
import Main from "./components/blogmain";


export default async function Blog(){
    return(
        <div>
            <Header/>
            <Hero/>
            {await Main()}
            <Footer/>
            
        </div>
    )
}