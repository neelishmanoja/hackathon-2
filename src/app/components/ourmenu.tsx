import Image from "next/image";
import textbar from "@/public/Text.png"
import pic from "@/public/unsplash_Lv174o7fn7Y.png"
import pic2 from "@/public/unsplash_INjdgkCwHp0.png"
import leaf from "@/public/Lettuce Leaf.png"
import leaf1 from "@/public/Lettuce Leaf (1).png"
import leaf2 from "@/public/Lettuce Leaf (2).png"
import leaf3 from "@/public/Lettuce Leaf (3).png"
import leaf4 from "@/public/Lettuce Leaf (4).png"
import leaf5 from "@/public/Lettuce Leaf (5).png"
import leaf6 from "@/public/Lettuce Leaf (6).png"
import leaf7 from "@/public/Lettuce Leaf (7).png"

export default function Ourmenu() {
    return (
        <section>
            <div className="flex justify-center">
                <div className="mt-7">
                    <span className="text-[#FF9F0D] ml-24 font-mono font-semibold text-[20px] sm:text-[22px] md:text-[24px]  ">Choose & pick</span>
                    <h2 className="text-4xl text-white text-center ml-4  w-[300px] sm:w-72 sm:text-4xl md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                        <span className="text-[#FF9F0D] ">Fr</span>om Our Menu
                    </h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-80 h-8 text-white border-2 space-x-3 mt-4 sm:w-96 sm:space-x-6 sm:ml-12 ">
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Breakfast</a>
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Lunch</a>
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Dinner</a>
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Dessert</a>
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Drink</a>
                    <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Snack</a>
                </div>
            </div>
            {/*left section*/}
            <div className="sm:flex sm:justify-center md:-ml-20 md:-mt-9 lg:gap-12">
                <div className="flex justify-center mt-6 sm:mt-44 md:mt-16">

                    <div>
                        <Image src={pic} alt=""
                            className="h-72 w-72 absolute sm:w-[320px] sm:h-[320px] sm:ml-[52px] md:ml-9 md:w-[290px] "
                        />
                    </div>

                    <Image src={pic2} alt=""
                        className="h-60 w-[320px] sm:w-[450px] sm:h-[260px] md:w-[380px]"
                    />
                </div>
                <div className="flex justify-center sm:-ml-8">

                    <div className="mt-20 md:mt-16">
                        <div className="md:flex">
                            <div>
                                <Image src={leaf} alt=""
                                    className="h-[55px] w-60"
                                />
                                <Image src={leaf1} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />
                                <Image src={leaf2} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />
                                <Image src={leaf3} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />
                            </div>
                            <div className="md:ml-6 mt-3 md:mt-0">
                                <Image src={leaf4} alt=""
                                    className="h-[55px] w-60"
                                />
                                <Image src={leaf5} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />
                                <Image src={leaf6} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />
                                <Image src={leaf7} alt=""
                                    className="h-[55px] w-60 mt-3"
                                />

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}