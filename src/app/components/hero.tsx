import sideline from "@/public/side line.png"
import hero from "@/public/Image.png"
import Image from "next/image"


export default function Hero() {
    return (
        <div className="flex justify-center md:flex-row md:items-center md:ml-2 mt-5 lg:mt-10">
            {/*side line*/}
            <div className="ml-4  ">
                <Image
                    src={sideline}
                    alt=""
                />
            </div>
            {/*left section*/}
            <div className="sm:flex lg:mt-3">
                <div className="sm:mt-6">
                    <span className="text-[#FF9F0D]  font-mono font-semibold text-[16px] sm:text-[22px] md:text-[24px] lg:ml-4 ">Its Quick & Amusing!</span>
                    <h2 className="text-4xl text-white text-center mt-1 w-72 -ml-2 sm:w-72 sm:text-4xl lg:font-semibold before:lg:text-[48px] lg:w-80 " >
                        <span className="text-[#FF9F0D] ">Th</span>e Art Of Speed Food Quality
                    </h2>
                    <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[17px] font-normal text-center -ml-3 mt-2 w-[280px] sm:w-72 md:w-80  lg:w-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officiis id ea esse officia pariatur vero debitis asperiores ratione, fugit, explicabo quidem quas repudiandae saepe non consectetur quasi culpa. Suscipit.</p>
                    <div className="flex items-center justify-center mt-4">
                        <button className="before:ease relative h-12 w-40 overflow-hidden border border-[#FF9F0D] bg-[#FF9F0D] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#FF9F0D] hover:before:-translate-x-40">
                            <span className="relative z-10">See More</span>
                        </button>
                    </div>


                </div>
                {/*hero image*/}

                <Image
                    src={hero}
                    alt="hero Image"
                    className="w-[300px] mt-5 sm:mt-0  sm:w-[300px] sm:h-[360px] md:ml-20  lg:ml-48 lg:w-[500px]"
                />
            </div>
        </div>
    )
}