import Image, { StaticImageData } from "next/image"

interface propstype {
    image : StaticImageData
    title : string 
    text : string
}

export default function Box2(prop: propstype) {
    return (
        <div>
            <div className="flex">
                <Image
                    src={prop.image}
                    alt="products"
                    width={100}
                    height={100}
                    className="w-16 h-16 lg:w-32 lg:h-28"
                />
                <div className="flex  gap-[70px] lg:gap-[100px]">
                    <h2 className="font-bold ml-6">{prop.title}</h2>
                    <p className="">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}