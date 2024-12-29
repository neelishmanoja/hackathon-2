import Image from "next/image";

export default function Teamcard(prop:any){
    return(
        <div>
            <div>
                <Image
                  src={prop.image}
                  alt=""
                  width={100}
                  height={100}
                  className="w-36 h-44 sm:w-28 sm:h-36 sm:ml-8 sm:mt-20 md:ml-12"
                />
                <div className=" mb-6 shadow-xl w-36 sm:w-28 sm:ml-8 md:ml-12 ">
                    <h1 className="font-bold text-[14px] ml-7 sm:ml-5">{prop.title}</h1>
                    <p className="ml-12 sm:ml-9">{prop.text}</p>
                </div>
            </div>
        </div>
    )
}