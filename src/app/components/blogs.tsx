import blog1 from "@/public/Blog Card 1.png"
import blog2 from "@/public/Blog Card 2.png"
import blog3 from "@/public/Blog Card 3.png"
import Image from "next/image"

export default function Blogs() {
    return (
        <section>
            <div>
                
                    <span className="text-[#FF9F0D] font-mono font-semibold text-[20px] sm:text-[20px] flex justify-center ">Blogs</span>
                    <div className="flex justify-center">
                    <h2 className="ml-5 text-2xl text-white w-[250px] sm:w-80 sm:text-2xl sm:ml-20 md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                        <span className="text-[#FF9F0D] ">La</span>test News & Blog
                    </h2>
                </div>
                <div className="sm:flex sm:justify-center sm:gap-6 lg:gap-8">
                <div className="flex justify-center gap-3 sm:gap-6 lg:gap-8 mt-5">
                    <Image src={blog1} alt="" className="h-48 w-36 sm:h-52 sm:w-44" />

                    <Image src={blog2} alt="" className="h-48 w-36 sm:h-52 sm:w-44" />
                </div>
                <div className="flex justify-center gap-3 mt-5">
                    <Image src={blog3} alt="" className="h-48 w-36 sm:h-52 sm:w-44" />

                    <Image src={blog1} alt="" className="h-48 w-36 sm:hidden" />
                </div>
                </div>
            </div>
        </section>
    )
}