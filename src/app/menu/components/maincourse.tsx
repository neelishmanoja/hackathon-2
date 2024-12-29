import Image from "next/image";
import maincoursepic from "@/public/chooseus4.png"
import { FiCoffee } from "react-icons/fi";
import clients from "@/public/Clients.png"
import clients1 from "@/public/Group 1000002107.png"
import logo from "@/public/Group.png"
import logo1 from "@/public/Group (1).png"
import logo2 from "@/public/Group (2).png"
import logo3 from "@/public/Group (3).png"

export default function Maincourse() {
    return (
        <section className="mt-10">
            <div className="sm:flex sm:justify-evenly ">

                {/*leftside*/}
                <div className="flex justify-around">
                    <div>
                        <div className="mt-2">
                            <FiCoffee className="text-[#FF9F0D] text-2xl" />
                            <h1 className="text-3xl font-sans font-bold">Starter Menu</h1>
                        </div>
                        <div className="flex border-b border-slate-500 mt-3">
                            <div>
                                <h2 className="font-semibold text-[17px] w-[230px] hover:text-[#FF9F0D]">Alder Grilled Chinook Salmon</h2>
                                <p className="text-[12px] w-[275px]">Toasted French bread topped with romano, cheddar</p>
                                <p>560 CAL</p>
                            </div>
                            <div>
                                <span className="text-2xl text-[#FF9F0D]">32$</span>
                            </div>
                        </div>

                        <div className="flex border-b border-slate-500 mt-3">
                            <div>
                                <h2 className="font-semibold text-[17px] w-[230px] hover:text-[#FF9F0D]">Berries and creme tart</h2>
                                <p className="text-[12px] w-[275px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p>700 CAL</p>
                            </div>
                            <div>
                                <span className="text-2xl text-[#FF9F0D]">43$</span>
                            </div>
                        </div>

                        <div className="flex border-b border-slate-500 mt-3">
                            <div>
                                <h2 className="font-semibold text-[17px] w-[230px] hover:text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h2>
                                <p className="text-[12px] w-[275px]">Ground cumin, avocados, peeled and cubed</p>
                                <p>1000 CAL</p>
                            </div>
                            <div>
                                <span className="text-2xl text-[#FF9F0D]">14$</span>
                            </div>
                        </div>

                        <div className="flex border-b border-slate-500 mt-3">
                            <div>
                                <h2 className="font-semibold text-[17px] w-[230px] hover:text-[#FF9F0D]">Spicy Vegan Potato Curry</h2>
                                <p className="text-[12px] w-[275px]">Spreadable cream cheese, crumbled blue cheese</p>
                                <p>560 CAL</p>
                            </div>
                            <div>
                                <span className="text-2xl text-[#FF9F0D]">35$</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*rightside*/}
                <div className="flex justify-around mt-4">
                    <Image src={maincoursepic} alt=""
                        className="w-80 h-96 sm:w-72 sm:h-[400px] "
                    />
                </div>
            </div>
            <div className=" items-center hidden sm:flex mt-5">
                <Image src={clients1} alt="" className="w-full h-32 sm:h-40" />
                <div className="absolute flex gap-24 md:gap-28 ml-2">
                    <div className="text-white">
                        <Image src={logo} alt="" className="w-10" />
                        <span className=" text-xl font-bold">420</span>
                        <p className=" ">Professional Chefs</p>
                    </div>
                    <div className="text-white">
                        <Image src={logo1} alt="" className="w-10" />
                        <span className=" text-xl font-bold">420</span>
                        <p className="">Items Of Food</p>
                    </div>
                    <div className="text-white">
                    <Image src={logo2} alt="" className="w-10" />
                    <span className=" text-xl font-bold">420</span>
                    <p className="">Years Of Experienced</p>
                </div>
                <div className="text-white">
                    <Image src={logo3} alt="" className="w-10" />
                    <span className=" text-xl font-bold">420</span>
                    <p className="">Happy Customers</p>
                </div>
                </div>
            </div>
        </section>
    )
}