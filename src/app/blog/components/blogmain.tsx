import Image from "next/image";
import Box from "./image";
import { CiCalendar } from "react-icons/ci"; //calender
import { PiChats } from "react-icons/pi"; //chats
import { PiUserCirclePlus } from "react-icons/pi"; //UserCirclePlus
import { PiArrowLineUpRight } from "react-icons/pi"; //ArrowLineUpRight
import { LuSearch } from "react-icons/lu"; //sreach icon
import pic from "@/public/choose1.png"
import pic2 from "@/public/product4.png"
import pic3 from "@/public/product3.png"
import pic4 from "@/public/unsplash_mAQZ3X_8_l0.png"
import blogger from "@/public/Group 20270.png"
import box1 from "@/public/box1.png"
import box2 from "@/public/box2.png"
import box3 from "@/public/chooseus6.png"
import box4 from "@/public/chooseus4.png"
import box5 from "@/public/product1.png"
import Box2 from "./box2";



export default function Main() {
    return (
        <section className="mt-16 sm:flex md:justify-center">
            <div className="flex justify-center sm:justify-start lg:flex ">
                {/*left*/}
                <div>
                    <div>
                        <Image src={pic} alt="" className="w-80 h-60 sm:w-72 md:w-96  md:h-64 lg:w-[420px] " />
                        <div className="flex gap-1">
                            <CiCalendar className="text-[#FF9F0D] mt-1" />
                            <p>dec 18,2024 / </p>
                            <PiChats className="text-[#FF9F0D] mt-1" />
                            <p>3/ </p>
                            <PiUserCirclePlus className="text-[#FF9F0D] mt-1" />
                            <p>Admin</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-[13px] md:text-[16px] font-bold">10 Reasons To Do A Digital Detox Challenge</h1>
                            <p className="text-[12px] w-[300px] mt-2 mb-2 sm:w-72 md:w-96">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat</p>
                            <button className="flex gap-2 border-2 border-[#FF9F0D] text-[#FF9F0D] p-3 rounded-xl">Read More
                                <PiArrowLineUpRight className="text-[#FF9F0D] mt-1" />
                            </button>
                        </div>
                    </div>
                    {/*sec section*/}
                    <div className="mt-12">
                        <Image src={pic2} alt="" className="w-80 h-60 sm:w-72 md:w-96 md:h-64 lg:w-[420px] " />
                        <div className="flex gap-1">
                            <CiCalendar className="text-[#FF9F0D] mt-1" />
                            <p>dec 18,2024 / </p>
                            <PiChats className="text-[#FF9F0D] mt-1" />
                            <p>3/ </p>
                            <PiUserCirclePlus className="text-[#FF9F0D] mt-1" />
                            <p>Admin</p>
                        </div>
                        <div>
                            <h1 className="text-[13px] md:text-[16px] font-bold mt-2">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
                            <p className="text-[12px] w-[300px] mt-2 mb-2 sm:w-72 md:w-96">At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat</p>
                            <button className="flex gap-2 border-2 border-[#FF9F0D] text-[#FF9F0D] p-3 rounded-xl">Read More
                                <PiArrowLineUpRight className="text-[#FF9F0D] mt-1" />
                            </button>
                        </div>
                    </div>
                    {/*third section*/}
                    <div className="mt-12">
                        <Image src={pic3} alt="" className="w-80 h-60 sm:w-72 md:w-96 md:h-64 lg:w-[420px] " />
                        <div className="flex gap-1">
                            <CiCalendar className="text-[#FF9F0D] mt-1" />
                            <p>dec 18,2024 / </p>
                            <PiChats className="text-[#FF9F0D] mt-1" />
                            <p>3/ </p>
                            <PiUserCirclePlus className="text-[#FF9F0D] mt-1" />
                            <p>Admin</p>
                        </div>
                        <div>
                            <h1 className="text-[13px] md:text-[16px] font-bold mt-2">The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
                            <p className="text-[12px] w-[300px] mt-2 mb-2 sm:w-72 md:w-96">At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat</p>
                            <button className="flex gap-2 border-2 border-[#FF9F0D] text-[#FF9F0D] p-3 rounded-xl">Read More
                                <PiArrowLineUpRight className="text-[#FF9F0D] mt-1" />
                            </button>
                        </div>
                    </div>
                    {/*forth section*/}
                    <div className="mt-12">
                        <Image src={pic4} alt="" className="w-80 h-60 sm:w-72 md:w-96 md:h-64 lg:w-[420px] " />
                        <div className="flex gap-1">
                            <CiCalendar className="text-[#FF9F0D] mt-1" />
                            <p>dec 18,2024 / </p>
                            <PiChats className="text-[#FF9F0D] mt-1" />
                            <p>3/ </p>
                            <PiUserCirclePlus className="text-[#FF9F0D] mt-1" />
                            <p>Admin</p>
                        </div>
                        <div>
                            <h1 className="text-[13px] md:text-[16px] font-bold mt-2">My Favorite Easy Black Pizza Toast Recipe</h1>
                            <p className="text-[12px] w-[300px] mt-2 mb-2 sm:w-72 md:w-96">At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat</p>
                            <button className="flex gap-2 border-2 border-[#FF9F0D] text-[#FF9F0D] p-3 rounded-xl">Read More
                                <PiArrowLineUpRight className="text-[#FF9F0D] mt-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*right*/}
            <div className="flex justify-center ml-8">
                <div>
                    <div className="flex mt-5 ">
                        <input
                            type="text"
                            placeholder="search your keywords....."
                            className=" h-10 w-60 border border-slate-300"
                        />
                        <div className="h-10 w-12 bg-[#FF9F0D] flex justify-center items-center">
                            <LuSearch className="text-white  text-2xl " />
                        </div>
                    </div>
                    <div className="border-2 mt-5 w-72  h-[370px] sm:w-[310px] sm:flex sm:justify-center   lg:w-[360px]">
                        <Image src={blogger} alt="" className="" />
                    </div>

                    <div className="mt-8 border-2 p-8 w-72  sm:w-[310px]  lg:w-[360px]">
                        <h1 className="font-bold">Recent Post</h1>
                        <div className="mt-5 border-b-2">
                            <Box
                                image={box1}
                                title={"December 18 2024"}
                                text={"Lorem ipsum dolor sit cingelit, sed do."}
                            />
                        </div>
                        <div className="mt-6 border-b-2">
                            <Box
                                image={box2}
                                title={"December 18 2024"}
                                text={"Lorem ipsum dolor sit cingelit, sed do."}
                            />
                        </div>
                        <div className="mt-6 border-b-2">
                            <Box
                                image={box3}
                                title={"December 18 2024"}
                                text={"Lorem ipsum dolor sit cingelit, sed do."}
                            />
                        </div>
                        <div className="mt-6 border-b-2">
                            <Box
                                image={box4}
                                title={"December 18 2024"}
                                text={"Lorem ipsum dolor sit cingelit, sed do."}
                            />
                        </div>
                    </div>
                    <div className="mt-8 border-2 p-6 w-72 sm:w-[310px]  lg:w-[360px]">
                        <h1 className="font-bold">Filter By Menu</h1>
                        <div className="mt-6">
                            <Box2
                                image={box1}
                                title={"Chicken Fry"}
                                text={"26"}
                            />
                        </div>
                        <div className="mt-6">
                            <Box2
                                image={box2}
                                title={"Burger Food"}
                                text={"46"}
                            />
                        </div>
                        <div className="mt-6">
                            <Box2
                                image={box3}
                                title={"Pizza"}
                                text={"16"}
                            />
                        </div>
                        <div className="mt-6">
                            <Box2
                                image={box4}
                                title={"Fresh Fruits"}
                                text={"36"}
                            />
                        </div>
                        <div className="mt-6">
                            <Box2
                                image={box5}
                                title={"Vegetables"}
                                text={"16"}
                            />
                        </div>

                    </div>

                    <div className="mt-8 border-2 w-72 sm:w-[310px] lg:w-[360px]">
                        <h1 className="font-bold">Populer Tags</h1>
                        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-y-2">
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-20 flex justify-center items-center">Sandwich</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-20 flex justify-center items-center">Tikka</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-12 flex justify-center items-center">Bbq</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-24 flex justify-center items-center">Restaurant</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-14 flex justify-center items-center">Health</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-16 flex justify-center items-center">Cookies</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-20 flex justify-center items-center">Pizza</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-32 flex justify-center items-center sm:-ml-5">Chicken Sharma</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-20 flex justify-center items-center">Fastfood</p>
                            <p className="hover:text-[#FF9F0D] p-1 cursor-pointer border-2 border-slate-300 hover:border-[#FF9F0D] w-20 flex justify-center items-center">Burger</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}