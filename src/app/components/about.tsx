import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import pic1 from "@/public/unsplash_fdlZBWIP0aM.png";
import pic2 from "@/public/unsplash_jpkfc5_d-DI.png";
import pic3 from "@/public/unsplash_mAQZ3X_8_l0.png";



export default function () {
    return (
        <section className=" flex justify-center">
            <div className=" sm:flex">
                {/*left section*/} 
               <div className="flex justify-center">
                <div className=" mt-6  text-white ">
                    <span className="text-[#FF9F0D] ml-28 font-mono font-semibold text-[20px] sm:text-[22px] md:text-[24px]  ">About us</span>
                    <h2 className="text-4xl text-white text-center ml-4  w-[280px] sm:w-72 sm:text-4xl md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                        <span className="text-[#FF9F0D">we</span> Create the best foody product
                    </h2>
                    <p className="text-white text-[12px] ml-7 sm:text-[13px] md:text-[14px] lg:text-[17px] font-normal text-center mt-2 w-[280px] sm:w-64 md:w-80  lg:w-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officiis id ea esse officia pariatur vero debitis asperiores ratione, fugit, explicabo quidem quas repudiandae saepe non consectetur quasi culpa. Suscipit.</p>
                    <ul className="ml-4">
                        <li className="text-[12px] md:text-[16px] font-normal mt-10 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>{" "}
                            Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className="text-[12px] md:text-[16px] font-normal mt-6 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>{" "}
                            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
                        </li>
                        <li className="text-[12px] md:text-[16px] font-normal mt-6 flex">
                            <span className="mr-[10px]">
                                <FaCheck />
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                    <div className="flex items-center justify-center">
                        <button className="w-28 h-10 bg-[#FF9F0D] text-white rounded-full mt-3 font-serif">Read More</button>
                    </div>
                    
                </div>
                </div>
                {/*image section*/}
                 <div className="flex justify-center">
                <div className="mt-[50px] md:mt-20 lg:ml-32">
                    <Image src={pic1} alt="Hero Image" className="w-[350px] sm:w-[370px] sm:-ml-4  lg:w-[430px]" />
                    <div className="flex flex-col md:flex-row -mt-[15px]  sm:flex-row sm:-ml-9 md:-ml-3">
                        <Image src={pic2} alt="Hero Image" className="mr-[16px] pt-[40px] w-[350px] sm:w-[160px] lg:w-[210px]" />
                        <Image src={pic3} alt="Hero Image" className="pt-[40px] w-[350px] sm:-ml-2 sm:w-[160px] lg:w-[210px]" />
                    </div>
                </div>
                </div>
            
            </div>
        </section>
    )
}