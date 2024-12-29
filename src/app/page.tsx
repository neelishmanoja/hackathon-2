import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Foodcatagory from "@/app/components/foodcatagory"
import Chooseus from "./components/chooseus";
import Ourmenu from "./components/ourmenu";
import Ourchef from "./components/ourchef";
import Testimonials from "./components/testimonials";
import Blogs from "./components/blogs";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="bg-black w-full">
   <Header/>
    <Hero/>
    <About/>
    <Foodcatagory/>
    <Chooseus/>
    <Ourmenu/>
    <Ourchef/>
    <Testimonials/>
    <Blogs/>
    <Footer/>
    </div>
  );
}
