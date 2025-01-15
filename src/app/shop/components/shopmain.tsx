import Products from "@/app/shop/components/products";
import banner from "@/public/Banner.png"
import priceline from "@/public/price_renge.png"
import component from "@/public/Component.png"
import { LuSearch } from "react-icons/lu"; // Search Icon

import Option from "./option";
import Image from "next/image";

export default async function Main() {
    return (
        <section className="sm:flex sm:justify-center sm:gap-4">

            <div className="flex justify-center">
                <div>
                    <div className="ml-4 mt-3">
                        <h2 className="flex items-center gap-1">Sort By:
                            <Option /></h2>
                    </div>
                    <div className="">
                       {await Products()}
                    </div>
                </div>

            </div>
            {/*right section*/}
            <div className="flex justify-center sm:ml-20 sm:mt-10 md:ml-28" >
                <div>
                    <div>
                        <div className="flex mt-5  ">
                            <input
                                type="text"
                                placeholder="search product"
                                className="bg-orange-200 h-10 w-40"
                            />
                            <div className="h-10 w-12 bg-[#FF9F0D] flex justify-center items-center">
                                <LuSearch className="text-white  text-2xl " />
                            </div>
                        </div>
                        <div className="text-2xl">
                            <div className="mb-3">
                                <h1 className="text-2xl font-bold">Category</h1>
                            </div>
                            <div>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Sandwiches</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Burger</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Chicken Chup</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Drink</p>
                                </div>

                                <div className="flex gap-2 mb-3 ">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Pizza</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Thi</p>
                                </div>

                                <div className="flex gap-2 mb-3 ">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Non Veg</p>
                                </div>

                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="checkbox"
                                    />
                                    <p>Uncategorized</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <Image src={banner} alt="" className="w-52 h-64 lg:w-60 lg:h-72" />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-2xl font-bold">Filter By Price</h1>
                        <Image src={priceline} alt="" />
                        <div className="flex justify-between w-60">
                            <p className="text-slate-500">From $0 to $8000</p>
                            <p className="text-slate-500">Filter</p>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-2xl font-bold mb-3">Latest Products</h1>
                            <Image src={component} alt="" className="mb-3" />
                            <Image src={component} alt="" className="mb-3" />
                            <Image src={component} alt="" className="mb-3" />
                            <Image src={component} alt="" className="mb-3" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Product Tags</h1>
                            <div className=" grid grid-cols-2 sm:grid-cols-3 ">
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-20">Services</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-20">Our Menu</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-12">Pizza</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-16">Cupcake</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-14">Burger</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-16">Cookies</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-20">Our Shop</p>
                                <p className="hover:text-[#FF9F0D] cursor-pointer hover:border-b-2 hover:border-[#FF9F0D] w-32">Tandoori Chicken</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}