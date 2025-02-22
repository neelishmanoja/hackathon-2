import pic1 from "@/public/choose1.png"
import pic2 from "@/public/chooseus3.png"
import pic3 from "@/public/product1.png"
import aboutpic from "@/public/aboutuspic.png"
import bestchef from "@/public/Student.png"
import coffee from "@/public/Coffee.png"
import person from "@/public/Person.png"
import Image from "next/image"
import { LuPlay } from "react-icons/lu"; //play icon

export default function Main() {
    return (
        <section className="flex justify-center">
            <div>
                <div className="sm:flex  sm:gap-8 md:gap-20">
                    <div className="flex mt-8 ml-4">
                        <div>
                            <Image
                                src={pic1} alt="" width={300} height={300} className="w-36 h-60 sm:w-40 sm:h-72 md:w-"
                            />
                        </div>
                        <div className=" ml-3 mt-12 sm:mt-20">
                            <Image src={pic2} alt="" className="w-32 h-28 mb-2 sm:w-36 sm:h-32" />
                            <Image src={pic3} alt="" width={300} height={300} className="w-32 h-28  sm:w-36 sm:h-32" />
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className="font-bold font-serif text-[#FF9F0D] text-2xl">About us ---</h1>
                        <p className="text-3xl font-bold mt-3 w-[320px] md:w-[440px]">Food is an important part Of a balanced Diet</p>
                        <p className="text-[14px] mt-5 w-[320px] md:w-[420px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
                            pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus
                            sit eu velit in consequat.
                        </p>
                        <div className="flex mt-5">
                        <button className="before:ease relative h-12 w-40 overflow-hidden border border-[#FF9F0D] bg-[#FF9F0D] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#FF9F0D] hover:before:-translate-x-40">
                            <span className="relative z-10">See More</span>
                        </button>
                            <div className="flex">
                                <div className="bg-[#FF9F0D] w-12 h-12 rounded-full flex justify-center items-center text-white ml-3">
                                    <LuPlay className="text-xl" />
                                </div>
                                <h4 className="mt-3 ml-2">Watch video </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/*sec section*/}
                <div className="mt-12 sm:flex sm:justify-center">
                    <div>
                        <div className="sm:ml-24 md:ml-36 lg:ml-56">
                            <h1 className="font-bold text-xl sm:text-2xl sm:ml-24">Why Choose us</h1>
                            <p className="text-[14px] w-[320px] sm:w-[420px] mt-3 md:text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                                bibendum non dui volutpat fringilla bibendum.
                            </p>
                        </div>
                        <div className="mt-4">
                            <Image src={aboutpic} alt="" className="w-80 h-36 sm:w-[600px] sm:h-40 md:w-[900px] md:h-48" />
                        </div>
                        <div className="flex justify-center mt-2 sm:mt-12">
                            <div className="sm:flex sm:gap-x-20 md:gap-x-36">
                                <div className="mb-5 mt-5 sm:mb-0 sm:mt-0">
                                    <Image src={bestchef} alt="" className="w-14 h-14 ml-4" />
                                    <h1 className="text-[14px] font-bold ml-4">Best Chef</h1>
                                    <p className="text-[9px] w-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                                        bibendum non dui volutpat
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <Image src={coffee} alt="" className="w-14 h-14 ml-4" />
                                    <h1 className="text-[14px] font-bold ml-2">120 Item food</h1>
                                    <p className="text-[9px] w-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                                        bibendum non dui volutpat
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <Image src={person} alt="" className="w-14 h-14 ml-4" />
                                    <h1 className="text-[14px] font-bold">Clean Environment</h1>
                                    <p className="text-[9px] w-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                                        bibendum non dui volutpat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}