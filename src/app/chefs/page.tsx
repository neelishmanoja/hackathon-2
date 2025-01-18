// Code Generated with love 
import Footer from "../components/footer";
import Header from "../components/header";

import Main from "./components/chefsmain";
import Hero from "./components/herochef";

export default async function Page() {
  return (
    <div>
        <Header/>
        <Hero/>
       {await Main()}
       <Footer/>
    </div>
  );
}