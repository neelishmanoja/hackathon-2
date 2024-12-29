import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "./components/bloghero";
import Main from "./components/blogmain";

export default function Blog(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Main/>
            <Footer/>
        </div>
    )
}