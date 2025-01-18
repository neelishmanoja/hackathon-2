import review from "@/public/review.png"
import dot from "@/public/Dot.png"
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="flex justify-center  sm:mt-28 md:mt-28">
            <div>
                <div>
                    <h1 className="text-[14px] text-[#FF9F0D] md:text-[18px]">Testimonials</h1>
                    <h1 className="text-xl font-bold md:text-2xl">What our client are saying</h1>
                </div>
                <div>
                    <div className=" w-80 flex justify-center border mt-12 md:w-96">
                        <div className=" absolute w-[270px] ">
                            <Image src={review} alt="" className=" w-[270px] -mt-7" />
                        </div>
                    </div>
                </div>
                <div className="mt-48">
            <div className="flex justify-center mt-6">
                    <Image src={dot} alt="" className="w-12 h-2" />
                </div>
            </div>
            </div>
            
        </section>
    )
}