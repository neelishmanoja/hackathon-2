"use client";
import Image from "next/image";
import Box from "./image";
import { LuSearch } from "react-icons/lu"; //sreach icon
import blogger from "@/public/Group 20270.png"
import box1 from "@/public/box1.png"
import box2 from "@/public/box2.png"
import box3 from "@/public/chooseus6.png"
import box4 from "@/public/chooseus4.png"
import box5 from "@/public/product1.png"
import Box2 from "./box2";
import BlogList from "./bloglist";
import MainPopularTags from "./mainpopulartags";




export default async function Main() {
   
    
    return (
        <section className="mt-16 sm:flex md:justify-center">
            <div className="flex justify-center lg:flex gap-y-10 ">
                {/*left*/}
                {await BlogList()}
                 
            </div>
            {/*right*/}
            <div className="flex justify-center sm:ml-6 md:ml-36 lg:ml-44">
                <div>
                    <div className="flex ">
                        <input
                            type="text"
                            placeholder="search your keywords....."
                            className=" h-10 w-60 border border-slate-300"
                        />
                        <div className="h-10 w-12 bg-[#FF9F0D] flex justify-center items-center">
                            <LuSearch className="text-white  text-2xl " />
                        </div>
                    </div>
                    <div className="border-2 mt-5 w-72  h-[370px] sm:w-[310px] sm:flex sm:justify-center   lg:w-[500px]">
                        <Image src={blogger} alt="" className="" />
                    </div>

                    <div className="mt-8 border-2 p-8 w-72  sm:w-[310px]  lg:w-[500px]">
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
                    <div className="mt-8 border-2 p-6 w-72 sm:w-[310px]  lg:w-[500px]">
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

                    <div className="mt-8 border-2 w-72 sm:w-[310px] lg:w-[500px]">
                        <h1 className="font-bold lg:ml-5">Populer Tags</h1>
                        <div >
                            <MainPopularTags />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
