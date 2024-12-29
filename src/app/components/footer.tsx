import Image from "next/image";
import clock from "@/public/ClockClockwise.png"
import resentpost1 from "@/public/chooseus3.png"
import resentpost2 from "@/public/resent post-2.png"
import resentpost3 from "@/public/Resent post-3.png"
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t-[1px]  border-[#FF9F0D] mt-5 bg-black ">
            <div className="">
                <div className="sm:flex border-b border-[#FF9F0D] sm:justify-around">
                    <div className="mt-2">
                        <div className="flex justify-center">
                            <h2 className=" text-xl text-white text-center  -mt-1  w-[350px] sm:w-80 sm:text-2xl md:w-80 lg:font-semibold before:lg:text-[48px] lg:ml-7  " >
                                <span className="text-[#FF9F0D] ">St</span>ill You Need Our Support ?
                            </h2>
                        </div>
                        <p className="text-white text-[10px] flex justify-center sm:mt-3">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                    </div>
                    <div className="flex justify-center mt-3  ">
                        <div className="bg-[#FF9F0D] w-44 h-10 flex items-center">
                            <input
                                type="text"
                                placeholder=" Enter Your Email.."
                                className=" bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
                            />
                        </div>
                        <div className="bg-white w-28 h-10 flex items-center mb-5">
                            <button className="text-[#FF9F0D]">Subscribe Now</button>
                        </div>
                    </div>
                </div>
                {/*aboutus*/}
                <div className="ml-8 sm:flex sm:-ml-3 sm:justify-evenly">
                    <div className="ml-6">
                        <div>
                            <h2 className="text-white text-xl">About Us.</h2>
                            <p className="text-white text-[10px] w-44 mt-5">Orporate clients and leisure travelers hasbeen relying on Groundlink for dependab
                                safe, and professional chauffeured car
                                service in major cities across World.</p>
                        </div>
                        <div className="flex mt-2">
                            <div className="bg-[#FF9F0D] w-20 h-16 flex justify-center items-center">
                                <Image src={clock} alt="" />
                            </div>
                            <div className="text-white -mt-1 ml-2">
                                <h6>Opening Houres</h6>
                                <h6>Mon - Sat(8.00 - 6.00)</h6>
                                <h6>Sunday - Closed</h6>
                            </div>
                        </div>
                    </div>
                    {/*Useful Links*/}
                    <div className="ml-6 mt-4">
                        <h2 className="text-white text-xl">Useful Links</h2>
                        <ul className="text-gray-400 mt-4">
                            <li>About</li>
                            <li className="mt-3">News</li>
                            <li className="mt-3">Partners</li>
                            <li className="mt-3">Team</li>
                            <li className="mt-3">Menu</li>
                            <li className="mt-3">Contacts</li>
                        </ul>
                    </div>
                    {/*Help?*/}
                    <div className="ml-6 mt-4">
                        <h2 className="text-white text-xl">Help?</h2>
                        <ul className="text-gray-400 mt-4">
                            <li>FAQ</li>
                            <li className="mt-3">Term & conditions</li>
                            <li className="mt-3">Reporting</li>
                            <li className="mt-3">Documentation</li>
                            <li className="mt-3">Support Policy</li>
                            <li className="mt-3">Privacy</li>
                        </ul>
                    </div>
                    {/*Recent Post*/}
                    <div className="ml-6 mt-4">
                        <h2 className="text-white text-xl">Recent Post</h2>
                        <div>
                            <div className="flex">
                                <Image src={resentpost1} alt=""
                                    className="h-10 w-10 mt-2"
                                />
                                <div className="ml-2">
                                    <p className="text-gray-400">20 Feb 2022</p>

                                    <p className="text-white">Keep Your Business </p>
                                </div>
                            </div>
                            <div className="flex">
                                <Image src={resentpost2} alt=""
                                    className="h-10 w-10 mt-2"
                                />
                                <div className="ml-2">
                                    <p className="text-gray-400">20 Feb 2022</p>

                                    <p className="text-white">Keep Your Business </p>
                                </div>
                            </div>
                            <div className="flex">
                                <Image src={resentpost3} alt=""
                                    className="h-10 w-10 mt-2"
                                />
                                <div className="ml-2">
                                    <p className="text-gray-400">20 Feb 2022</p>

                                    <p className="text-white">Keep Your Business </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-16 bg-[#FF9F0D] sm:flex sm:justify-evenly sm:items-center">
                    <p className="text-[13px] w-80">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex gap-2 justify-center mt-2">
                        <div className="w-7 h-7 bg-blue-600 flex justify-center items-center">
                            <FaFacebookF className="text-white" />
                        </div>
                        <div className="w-7 h-7 bg-black flex justify-center items-center">
                            <AiOutlineTwitter className="text-sky-500" />
                        </div>
                        <div className="w-7 h-7 bg-white flex justify-center items-center">
                            <FaInstagram />
                        </div>
                        <div className="w-7 h-7 bg-white flex justify-center items-center">
                            <FaYoutube className="text-red-600" />
                        </div>
                        <div className="w-7 h-7 bg-white flex justify-center items-center">
                            <FaTiktok />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}