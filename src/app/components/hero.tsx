import sideline from "@/public/side line.png"
import hero from "@/public/Image.png"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex justify-center md:flex-row md:items-center md:ml-2 ">
            {/*side line*/}
            <div className="ml-4 ">
                <Image
                    src={sideline}
                    alt=""
                />
            </div>
            {/*left section*/}
            <div className="sm:flex ">
                <div className="sm:mt-6    ">
                    <span className="text-[#FF9F0D]  font-mono font-semibold text-[16px] sm:text-[22px] md:text-[24px] lg:ml-4 ">Its Quick & Amusing!</span>
                    <h2 className="text-4xl text-white text-center mt-1 w-72 -ml-2 sm:w-72 sm:text-4xl lg:font-semibold before:lg:text-[48px] lg:w-80 " >
                        <span className="text-[#FF9F0D] ">Th</span>e Art Of Speed Food Quality
                    </h2>
                    <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[17px] font-normal text-center -ml-3 mt-2 w-[280px] sm:w-72 md:w-80  lg:w-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officiis id ea esse officia pariatur vero debitis asperiores ratione, fugit, explicabo quidem quas repudiandae saepe non consectetur quasi culpa. Suscipit.</p>
                    <div className="flex items-center justify-center">
                        <button className="w-28 h-10 bg-[#FF9F0D] text-white rounded-full mt-3 font-serif">See More</button>
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