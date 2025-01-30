import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "./components/abouthero";
import Main from "./components/aboutmain";
import Menu from "./components/aboutmenu";
import Testimonials from "./components/abouttestimonials";
import OurChefs from "./components/ourchefsbutton";
import Team from "./components/team";

export default function Aboutus() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Team />
            <div className="flex items-center justify-center sm:mt-52">
                <a href="/chefs">
                    <OurChefs name="Meet Our Chefs" classname="before:ease relative h-10 w-32 font-serif rounded-full overflow-hidden border border-[#FF9F0D] bg-[#FF9F0D] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#FF9F0D] hover:before:-translate-x-40" />
                </a>
            </div>
            <Testimonials />
            <Menu />
            <Footer />
        </div>
    )
}