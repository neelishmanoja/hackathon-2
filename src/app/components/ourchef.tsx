import chef1 from "@/public/Chef Card 1.png"
import chef2 from "@/public/Card 2.png"
import chef3 from "@/public/Card 3.png"
import chef4 from "@/public/Card 4.png"
import Image from "next/image"

export default function Ourchef() {
    return (
        <section className="mt-6">
            <div className="flex justify-center">
                <div className="mt-7">
                    <span className="text-[#FF9F0D] ml-32 font-mono font-semibold text-[20px] sm:text-[22px] md:text-[24px]  ">Chefs</span>
                    <h2 className="text-4xl text-white text-center ml-4  w-[300px] sm:w-72 sm:text-4xl md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                        <span className="text-[#FF9F0D] ">Me</span>et Our Chef
                    </h2>
                </div>
            </div>
            {/*chef section*/}
            <div className="flex justify-center sm:mt-8">
                <div className="sm:flex ">
                    <div className="flex gap-5">
                        <Image
                            src={chef1} alt=""
                            className="h-48 w-36 lg:h- lg:w-48"
                        />
                        <Image
                            src={chef2} alt=""
                            className="h-48 w-36 lg:h- lg:w-48"
                        />
                    </div>
                    <div className="flex gap-5 mt-3 sm:mt-0 sm:ml-5">
                        <Image
                            src={chef3} alt=""
                            className="h-48 w-36 lg:h- lg:w-48"
                        />
                        <Image
                            src={chef4} alt=""
                            className="h-48 w-36 lg:h- lg:w-48"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className="bg-black border rounded-full border-orange-500 text-white w-24 h-10 ">See More</button>
            </div>
        </section>
    )
}