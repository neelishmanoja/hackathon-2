import Image, { StaticImageData } from "next/image"


interface propstype {
    image : StaticImageData
    title : string 
    text : string
}

export default function Box(prop: propstype) {
    return (
        <div>
            <div className="flex">
                <Image
                    src={prop.image}
                    alt="products"
                    width={100}
                    height={100}
                    className="w-24 h-24 sm:w-48 lg:h-32"
                />
                <div>
                    <h2 className="text-slate-400 ml-3">{prop.title}</h2>
                    <p className="mt-3 ml-3">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}



