import Image from "next/image";
import pic1 from "@/public/partners1.png"
import pic2 from "@/public/partners2.png"
import pic3 from "@/public/partners3.png"
import pic4 from "@/public/partners4.png"
import pic5 from "@/public/partners5.png"
import pic6 from "@/public/partners6.png"

export default function Partners() {
    return (
        <section className="mt-5 flex justify-center">
            <div >

                <div className="sm:ml-44 md:ml-60">
                    <h4 className="ml-16">Partners & Clients</h4>
                    <h1 className="text-xl font-bold ">We work with the best people</h1>
                </div>

                <div className="sm:flex sm:gap-4 md:gap-10 mt-7">
                    <div className="flex sm:gap-4 md:gap-10">
                        <Image src={pic1} alt="" className="w-24" />
                        <Image src={pic2} alt="" className="w-24" />
                        <Image src={pic3} alt="" className="w-24" />

                    </div>
                    <div className="flex sm:gap-4 md:gap-10">
                        <Image src={pic4} alt="" className="w-24" />
                        <Image src={pic5} alt="" className="w-24" />
                        <Image src={pic6} alt="" className="w-24" />
                    </div>
                </div>
            </div>
        </section>
    )
}