import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Food } from "../../../../typings";




export default async function Products() {
  const querry = `*[_type == "food"]{
  _id,
  name,
  category,
  price,
  originalPrice,
  tags,
  image {
    asset -> {
      _id,
      url
    }
  },
  description,
  available
}
`
  const foods: Food[] = await client.fetch(querry)
  return (
    <div className="ml-4 mt-4  gap-4 sm:gap-6 grid grid-cols-2 md:grid-cols-3  ">
      {foods.map((food) => {

        return (
          <div key={food._id} className="-ml-2">

            <div className="relative overflow-hidden hover:scale-110 duration-300 capitalize active:scale-100">
              <div className="absolute mt-2 sm:mt-4 sm:ml-3">
                <button className="bg-[#FF9F0D] text-white px-1 sm:px-2 py-1 rounded-full text-[12px] sm:text-[15px]  ">{food.tags}</button>

              </div>



              <Image
                src={urlFor(food.image).url()}
                alt="products"
                width={600}
                height={600}
                className="w-36 h-40 sm:w-48 md:w-60 md:h-56 lg:w-72 "
              />
            </div>
            <div className="mt-2">
              <div>
                <p className="text-xl font-bold">{food.name}</p>
              </div>
              <div>
                <p className="text-[17px]  ">{food.description}</p>
              </div>
              <div>
                <p className="text-xl text-green-700 ">{food.available}</p>
              </div>
              {/* Price Section */}
              <div className="flex items-center space-x-2">

                <div className="flex gap-7">
                  {/* Original Price */}
                  <span className="text-gray-500 line-through text-lg">{`$${food.originalPrice}`}</span>
                  {/* Discounted Price */}
                  <span className="text-[#FF9F0D] font-bold text-lg">{`$${food.price}`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}