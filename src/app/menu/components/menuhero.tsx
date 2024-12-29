import Image from "next/image";
import menupic from "@/public/menuhero.png"
import { TbMathGreater } from "react-icons/tb";

export default function Hero() {
    return (
        <section>
            <div>
                <div className="flex justify-center items-center">
                    <Image src={menupic} alt=""
                        className="w-full h-60 "
                    />
                    <div className="absolute text-white">
                        <div className="text-2xl font-bold">
                            <h2>Our Menu</h2>
                        </div>
                        <div className="flex gap-1 mt-3">
                            <span>
                                <a href="/">Home</a>
                            </span>
                            <TbMathGreater className="mt-[6px]" />
                            <span className="text-[#FF9F0D]">Menu</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}