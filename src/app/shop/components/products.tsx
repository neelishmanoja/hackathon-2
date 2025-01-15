import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";




export default async function Products() {
  const querry = `*[_type=='shopProducts'] | order(_createdAt asc){
  image,title,price,discount,
    "slug":slug.current
}`;
 const products: ShopProducts[] = await client.fetch(querry)
  return (
    <div className="ml-4 mt-4  gap-4 grid grid-cols-2 md:grid-cols-3 ">
      {products.map((products) => {
        const price = parseFloat(products.price.toString());
        const discount = parseFloat(products.discount.toString());
        const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;
        return (
          <div key={products.slug}>
            <div className="relative overflow-hidden hover:scale-110 duration-300 capitalize active:scale-100">
              <Image
                src={urlFor(products.image).url()}
                alt="products"
                width={600}
                height={600}
                className="w-36 h-40 sm:w-48 md:w-72 md:h-56 lg:w-72 "
              />
            </div>
            <div>
              <p className="text-xl font-bold  ">{products.title}</p>
            </div>
            {/* Price Section */}
            <div className="flex items-center space-x-2">
              {/* Check if discount is greater than 0 */}
              {discount > 0 ? (
                <div className="flex gap-7">
                  {/* Original Price */}
                  <span className="text-gray-500 line-through text-lg">{`$${price.toFixed(2)}`}</span>
                  {/* Discounted Price */}
                  <span className="text-[#FF9F0D] font-bold text-lg">{`$${discountedPrice.toFixed(2)}`}</span>
                </div>
              ) : (
                // If no discount, just show the original price
                <span className="text-lg">{`$${price.toFixed(2)}`}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  )
}