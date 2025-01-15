import Image from "next/image";
import pic1 from "@/public/choose1.png"
import pic2 from "@/public/chooseus2.png"
import pic3 from "@/public/chooseus3.png"
import pic4 from "@/public/chooseus4.png"
import pic5 from "@/public/chooseus5.png"
import pic6 from "@/public/chooseus6.png"
import humburger from "@/public/Hamburger.png"
import cookie from "@/public/Cookie.png"
import wine from "@/public/Wine.png"
import expirence from "@/public/Group 1000002063.png"
import clients from "@/public/Clients.png"

export default function Chooseus() {
    return (
        <>
        <section className="flex justify-center md:mt-10 lg:mt-10 ">
            <div className="md:flex gap-7 lg:gap-20" >
                {/*right section*/}
                <div>
                    <div className=" mt-10  text-white ">
                        <span className="text-[#FF9F0D] ml-24 font-mono font-semibold text-[20px] sm:text-[22px] md:text-[24px]  ">Why Choose Us</span>
                        <h2 className="text-4xl text-white text-center ml-3  w-[300px] sm:w-80 sm:ml-5 sm:text-4xl lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                            <span className="text-[#FF9F0D] ">Ex</span>ta ordinary taste
                            And Experienced
                        </h2>
                        <p className=" text-white text-[12px] ml-3 sm:text-[13px] md:text-[14px] lg:text-[17px] font-normal text-center mt-2 w-[280px] sm:w-64 sm:ml-14 md:w-[280px]   lg:w-96 lg:-ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officiis id ea esse officia pariatur vero debitis asperiores ratione, fugit, explicabo quidem quas repudiandae saepe non consectetur quasi culpa. Suscipit.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-3">
                        <div className="w-20 h-20 bg-[#FF9F0D] flex items-center justify-center">
                            <Image
                                src={humburger}
                                alt="humburger"
                                className="w-14 h-14"
                            /> 
                        </div>
                        <div className="w-20 h-20 bg-[#FF9F0D] flex items-center justify-center">
                            <Image
                                src={cookie}
                                alt="humburger"
                                className="w-14 h-14"
                            />
                        </div>
                        <div className="w-20 h-20 bg-[#FF9F0D] flex items-center justify-center">
                            <Image
                                src={wine}
                                alt="humburger"
                                className="w-14 h-14"
                            />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Image
                            src={expirence}
                            alt=""
                            className="w-80 h-24"
                        />
                    </div>
                </div>
                {/*left section*/}
                <div className="lg:mt-7 md:-ml-5">
                    <div className="sm:flex">
                        <Image
                            src={pic1}
                            alt="food pic"
                            className="w-[320px] h-56 mt-5 sm:w-56 md:w-[250px] md:h-48 lg:w-48"
                        />
        
                        <Image
                            src={pic2}
                            alt="food pic"
                            className="w-[320px] h-56 mt-5 sm:w-32 sm:h-[120px] md:mt-20 sm:ml-2 md:w-[150px] md:h-32 lg:w-44"
                        />
                    </div>
                    <div className="sm:flex">
                        <Image
                            src={pic3}
                            alt="food pic"
                            className="w-[320px] h-56 mt-5 sm:w-32 sm:mt-2 md:w-[140px] md:h-44 lg:w-40 lg:h-52"
                        />
                        <Image
                            src={pic4}
                            alt="food pic"
                            className="w-[320px] h-56 mt-5 sm:w-28 sm:h-[120px] sm:mt-2 sm:ml-2 md:w-[130px] md:h-32 lg:w-32 lg:h-[120px]"
                        />
                        <div className="sm:ml-2">

                            <Image
                                src={pic5}
                                alt="food pic"
                                className="w-[320px] h-56 mt-5 sm:w-28 sm:h-[120px] sm:mt-2  md:w-[100px] md:h-[100px] lg:w-28 lg:h-[100px]"
                            />
                            <Image
                                src={pic6}
                                alt="food pic"
                                className="w-[320px] h-56 mt-5 sm:w-28 sm:h-[120px] sm:mt-2 md:w-[100px] md:h-[100px] lg:w-28 lg:h-[100px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
         <div className="flex justify-center  ">
         <Image src={clients} alt=""
          className="w-[320px] h-28 sm:w-[550px] sm:h-32 md:w-[750px] md:h-36 lg:w-[1100px] lg:h-56"
         />
     </div>
     </>
    )
}