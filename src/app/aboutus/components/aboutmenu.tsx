export default function Menu() {
    return (
        <section className="mt-8 flex justify-center">
            <div>
                <div>
                    <h1 className="text-xl font-bold ml-24 sm:ml-52">Our Food Menu</h1>
                    <p className="text-[12px] w-72 mt-4 ml-8 sm:ml-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius sed pharetra dictum neque massa congue</p>
                    <div className="w-80 h-8  border-2 space-x-3 mt-4 sm:w-96 sm:space-x-6 sm:ml-28 ">
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Breakfast</a>
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Lunch</a>
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Dinner</a>
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Dessert</a>
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Drink</a>
                        <a href="" className="font-bold text-[13px] hover:text-[#FF9F0D] hover:border-b hover:border-[#FF9F0D]">Snack</a>
                    </div>
                </div>
                <div className="sm:flex sm:gap-8 md:gap-20">
                    {/*leftside*/}
                    <div className="flex justify-around mt-14 sm:mt-0">
                        <div>
                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Alder Grilled Chinook Salmon</h2>
                                    <p className="text-[12px] sm:text-[10px] sm:w-[240px] w-[275px] md:w-[275px] md:text-[12px]">Toasted French bread topped with romano, cheddar</p>
                                    <p>560 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">32$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Berries and creme tart</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p>700 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">43$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Ground cumin, avocados, peeled and cubed</p>
                                    <p>1000 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">14$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Spicy Vegan Potato Curry</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p>560 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">35$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*rightside*/}

                    <div className="flex justify-around mt-14 sm:mt-0">
                        <div>
                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Alder Grilled Chinook Salmon</h2>
                                    <p className="text-[12px] sm:text-[10px] sm:w-[240px] w-[275px] md:w-[275px] md:text-[12px]">Toasted French bread topped with romano, cheddar</p>
                                    <p>560 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">32$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Berries and creme tart</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p>700 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">43$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Ground cumin, avocados, peeled and cubed</p>
                                    <p>1000 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">14$</span>
                                </div>
                            </div>

                            <div className="flex border-b border-slate-500 sm:w-[270px] md:w-80 mt-3">
                                <div>
                                    <h2 className="font-semibold text-[17px] w-[230px] sm:text-[13px] sm:w-[180px] md:w-[230px] md:text-[17px] hover:text-[#FF9F0D]">Spicy Vegan Potato Curry</h2>
                                    <p className="text-[12px] w-[275px] sm:text-[10px] sm:w-[240px] md:w-[275px] md:text-[12px]">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p>560 CAL</p>
                                </div>
                                <div>
                                    <span className="text-2xl text-[#FF9F0D] sm:text-xl sm:-ml-2 md:text-2xl md:-ml-0">35$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}