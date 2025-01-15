import img1 from "@/public/img1.png"
import img2 from "@/public/chooseus2.png"
import img3 from "@/public/unsplash_MRHyv-hHxgk.png"
import img4 from "@/public/unsplash_q54Oxq44MZs.png"
import Image from "next/image"

export default function Foodcatagory() {
    return (
        <section className="w-full  mt-10">
            
                <span className="text-[#FF9F0D] font-mono font-semibold text-[20px] flex justify-center sm:text-[22px]  md:text-[24px]  ">
                    Food Category
                </span>
                <h2 className="text-4xl text-white text-center flex justify-center sm:text-4xl lg:font-semibold lg:text-[48px]">
                    <span className="text-[#FF9F0D" >Ch</span>oose Food Item
                </h2>
                {/*image section*/}
                <div className="flex justify-center">

               
                <div className="mt-5  sm:flex sm:gap-4  md:gap-6 lg:gap-10 ">
                    <Image
                        src={img1}
                        alt="foodpic"
                        className="w-[320px] h-56 mt-5 sm:w-36 sm:h-44 md:w-[160px] md:h-44 lg:w-48"
                    />
                    <Image
                        src={img2}
                        alt="fooditem" 
                        className="w-[320px] h-56 mt-5 sm:w-36 sm:h-44 md:w-[160px] md:h-44 lg:w-48"
                    />
                    <Image
                        src={img3}
                        alt="fooditem"
                        className="w-[320px] h-56 mt-5 sm:w-36 sm:h-44 md:w-[160px] md:h-44 lg:w-48"
                    />
                    <Image
                        src={img4}
                        alt="fooditem"
                        className="w-[320px] h-56 mt-5 sm:w-36 sm:h-44 md:w-[160px] md:h-44 lg:w-48"
                    />
                </div>
                </div>
        </section>
    )
}