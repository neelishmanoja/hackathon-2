"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import { LuSearch } from "react-icons/lu"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon








export default function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className="h-[87px] bg-black">

            <div className=" flex justify-center">
                <a href="/" className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white">
                    <span className="text-[#FF9F0D]">Food</span>tuck </a>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-between   ">

                <div className="text-white space-x-4 hidden sm:block  sm:mt-5 lg:text-2xl md:ml-14 lg:ml-16  ">
                    <a href="#home" className="hover:text-[#FF9F0D] transition sm:hidden">
                        Home
                    </a>
                    <a href="/menu" className="hover:text-[#FF9F0D] transition">
                        Menu
                    </a>
                    <a href="/blog" className="hover:text-[#FF9F0D] transition">
                        Blog
                    </a>
                    <a href="#pages" className="hover:text-[#FF9F0D] transition">
                        Pages
                    </a>
                    <a href="/aboutus" className="hover:text-[#FF9F0D] transition">
                        About
                    </a>
                    <a href="/shop" className="hover:text-[#FF9F0D] transition">
                        Shop
                    </a>
                    <a href="#contact" className="hover:text-[#FF9F0D] transition">
                        Contact
                    </a>
                </div>

                {/* Search Bar */}
                <div className=" items-center bg-black border-orange-500 border-2 px-3 py-2 rounded-full w-[150px] sm:w-40 lg:w-[250px] flex h-10 sm:mt-1 ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className=" bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
                    />
                    <LuSearch className="text-[#FF9F0D] text-2xl " />
                </div>
                {/*cart*/}
                <PiHandbagBold className="text-white text-2xl mt-2 -ml-14 sm:-ml-12 sm:text-3xl md:-ml-[100px] lg:-ml-[220px]"/>
                <div>
                    <Sheet>
                        <SheetTrigger className="text-white sm:hidden md:hidden block" ><Hamburger toggled={isOpen} toggle={setOpen} /></SheetTrigger>
                        <SheetContent className="bg-white">
                            <SheetHeader>
                                <SheetDescription className=" font-bold text-2xl text-black">
                                    <ul>
                                        <li>
                                            <a href="/" className="hover:text-[#FF9F0D] transition sm:hidden">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/menu" className="hover:text-[#FF9F0D] transition">
                                                Menu
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/blog" className="hover:text-[#FF9F0D] transition">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#pages" className="hover:text-[#FF9F0D] transition">
                                                Pages
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/aboutus" className="hover:text-[#FF9F0D] transition">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shop" className="hover:text-[#FF9F0D] transition">
                                                Shop
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact" className="hover:text-[#FF9F0D] transition">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>




            </div>



        </nav>
    )
}