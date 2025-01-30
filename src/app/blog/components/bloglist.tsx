
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { PiArrowLineUpRight, PiChats, PiUserCirclePlus } from "react-icons/pi";
import { Blog } from "../../../../typings";
import { promises } from "dns";



export default async function BlogList() {

  const query = `*[_type=='blog'] | order(_createdAt asc){
                image,title,date,description,
                "slug":slug.current }`

  const blogs: Blog[] = await client.fetch(query);
  return (
    <div>
      {
        blogs.map((blog: Blog) => (
          <div key={blog.slug} className="mt-4 sm:ml-6">
            <Image src={urlFor(blog.image).url()}
              alt={blog.title}
              width={500}
              height={500}
              className="cursor-pointer w-[310px] h-60 sm:w-72 md:w-96 md:h-64 lg:w-[450px] lg:h-72 transition duration-300 ease-in-out scale-105 shadow-lg dark:hover:shadow-black/30" />
            <div className="flex gap-1 mt-4">
              <CiCalendar className="text-[#FF9F0D] mt-1" />
              <p>{blog.date} / </p>
              <p className="flex">3<PiChats className="text-[#FF9F0D] mt-1" />
              </p>
              <p className="flex"> / 3<PiUserCirclePlus className="text-[#FF9F0D] mt-1" /></p>
            </div>
            <h1 className="text-[13px] md:text-[16px] font-bold lg:w-[450px] lg:text-[19px]">{blog.title}</h1>
            <p className="text-[12px] w-[280px] mt-2 mb-2 sm:w-72 md:w-96 lg:w-[450px] lg:text-[16px]">{blog.description}</p>
            <button className="flex gap-2 border-2 border-[#FF9F0D] text-[#FF9F0D] p-3 rounded-xl">Read More
              <PiArrowLineUpRight className="text-[#FF9F0D] mt-1" />
            </button>
          </div>
        ))}
    </div>
  );
}


