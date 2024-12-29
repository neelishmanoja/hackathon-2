import review from "@/public/review.png"
import dot from "@/public/Dot.png"
import creativebar from "@/public/Restraind creative Process.png"

import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="mt-6 flex justify-center">
            <div>
                <div className="sm:ml-36">
                    <span className="text-[#FF9F0D] ml-6 font-mono font-semibold text-[20px] sm:text-[20px]  ">Testimonials</span>
                    <h2 className="text-2xl text-white text-center -ml-3 -mt-1  w-[350px] sm:w-80 sm:text-2xl md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                        <span className="text-[#FF9F0D] ">Wh</span>at our client are saying
                    </h2>
                </div>
                <div className="flex justify-center mt-8">

                    <div className="bg-white w-72 h-40 sm:w-80"></div>

                    <Image src={review} alt="" className="w-60 h-44 absolute -mt-7 " />
                </div>
                <div className="flex justify-center mt-6">
                    <Image src={dot} alt="" className="w-12 h-2" />
                </div>
                <div className="mt-4">
                    <Image src={creativebar} alt=""
                        className="h-32 w-[320px] sm:w-[620px] sm:h-[150px] lg:w-[860px] lg:h-48"
                    />
                </div>
            </div>
        </section>
    )
}