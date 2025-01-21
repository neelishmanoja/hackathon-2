export default function OurChefs() {
    return (
        <div className="flex items-center justify-center sm:mt-52">
            <button className="before:ease relative h-10 w-32 font-serif rounded-full overflow-hidden border border-[#FF9F0D] bg-[#FF9F0D] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#FF9F0D] hover:before:-translate-x-40">
                <span className="relative z-10">
                    <a href="/chefs">Meet ourchefs</a>
                    </span>
            </button>
        </div>
    )
}