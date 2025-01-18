import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "./components/heroshop";
import Main from "./components/shopmain";

export default async function Shop(){
    return(
        <div>
            <Header/>
            <Hero/>
            {await Main()}
            <Footer/>
       </div>
    )
}