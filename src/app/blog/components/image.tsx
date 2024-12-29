import Image from "next/image"

export default function Box(prop: any) {
    return (
        <div>
            <div className="flex">
                <Image
                    src={prop.image}
                    alt="products"
                    width={100}
                    height={100}
                    className="w-24 h-24 sm:w-48"
                />
                <div>
                    <h2 className="text-slate-400 ml-3">{prop.title}</h2>
                    <p className="mt-3 ml-3">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}



