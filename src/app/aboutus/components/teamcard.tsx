import Image, { StaticImageData } from "next/image";

interface propstype {
    image : StaticImageData
    title : string 
    text : string
}

export default function Teamcard(prop:propstype){
    return(
        <div>
            <div>
                <Image
                  src={prop.image}
                  alt=""
                  width={100}
                  height={100}
                  className="w-36 h-44 sm:w-28 sm:h-36 sm:ml-8 sm:mt-20 md:ml-12 md:h-44 md:w-36"
                />
                <div className=" mb-6 shadow-xl w-36 sm:w-28 sm:ml-8 md:ml-12 md:w-36">
                    <h1 className="font-bold text-[14px] ml-7 sm:ml-5 md:ml-6 md:text-[16px]">{prop.title}</h1>
                    <p className="ml-12 sm:ml-9 md:ml-12">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}