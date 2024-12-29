import Image from "next/image";
import starterpic from "@/public/starterpic.png"
import { FiCoffee } from "react-icons/fi";

export default function Starter() {
    return (
        <section className="mt-7">
            <div className="sm:flex sm:justify-evenly ">
                {/*leftside*/}
                <div className="flex justify-around">
                    <Image src={starterpic} alt=""
                        className="w-80 h-96 sm:w-72 sm:h-[415px] "
                    />
                </div>

                {/*rightside*/}
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
            </div>
        </section>
    )
}