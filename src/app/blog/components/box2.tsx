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
                    className="w-16 h-16 "
                />
                <div className="flex gap-[86px]">
                    <h2 className="font-bold ml-3">{prop.title}</h2>
                    <p className="">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}