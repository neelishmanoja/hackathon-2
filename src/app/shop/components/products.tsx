import Image, { StaticImageData } from "next/image";

interface propstype {
  image : StaticImageData
  price : string
  discount : string
  title : string
}



export default function Products(prop: propstype) {
  const price = parseFloat(prop.price);
  const discount = parseFloat(prop.discount);
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;
  return (
    <div>
      <div>
        <Image
          src={prop.image}
          alt="products"
          width={100}
          height={100}
          className="w-36 h-40 sm:w-48"
        />
      </div>
      <div>
        <p className="text-xl font-bold  ">{prop.title}</p>
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
  )
}