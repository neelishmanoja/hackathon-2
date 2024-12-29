import bg from "@/public/aboutbg.png"
import teampic from "@/public/R.jpeg"
import Image from "next/image"
import Teamcard from "./teamcard"

export default function Team() {
    return (
        <section>
            <div className="flex justify-center">
                <div className="sm:flex">
                    <Image src={bg} alt="" className="w-80 h-36 sm:w-[600px] sm:h-40 md:w-[700px]" />
                    <div className="ml-20 mt-5 sm:absolute sm:flex sm:ml-0">
                        <Teamcard
                         image ={teampic}
                         title ={"Mark Henry"}
                         text ={"Owner"}
                        />
                        <Teamcard
                         image ={teampic}
                         title ={"Lucky Helen"}
                         text ={"Chef"}
                        />
                        <Teamcard
                         image ={teampic}
                         title ={"Moon Henry"}
                         text ={"Founder"}
                        />
                        <Teamcard
                         image ={teampic}
                         title ={"Tom Monrow"}
                         text ={"Specialist"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}