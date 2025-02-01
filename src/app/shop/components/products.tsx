"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Food } from "../../../../typings";
import { addtocart } from "@/app/actions/actions";
import toast from "react-hot-toast";


export default function Products() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "food"]{
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
        }`;
        const fetchedFoods = await client.fetch(query);
        setFoods(fetchedFoods);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, food: Food) => {
    e.preventDefault();
    toast.success(`${food.name} Added to Cart`);
    addtocart(food);
  };

  return (
    <div className="ml-4 mt-4 gap-4 sm:gap-6 grid grid-cols-2 md:grid-cols-3">
      {loading ? (
        <p className="text-center text-2xl col-span-full text-gray-500">Loading....</p>
      ) : foods.length > 0 ? (
        foods.map((food) => (
          <div key={food._id} className="-ml-2">
            <div className="relative overflow-hidden hover:scale-110 duration-300 capitalize active:scale-100">
              <div className="absolute mt-4 ml-3">
                <button className="bg-[#FF9F0D] text-white px-2 py-1 rounded-full">
                  {food.tags}
                </button>
              </div>
              <Image
                src={urlFor(food.image).url()}
                alt="products"
                width={600}
                height={600}
                className="w-36 h-40 sm:w-48 md:w-60 md:h-56 lg:w-72"
              />
            </div>
            <div>
              <p className="text-xl font-bold">{food.name}</p>
            </div>
            <div>
              <p className="text-xl">{food.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex gap-7">
                <span className="text-gray-500 line-through text-lg">{`$${food.originalPrice}`}</span>
                <span className="text-[#FF9F0D] font-bold text-lg">{`$${food.price}`}</span>
              </div>
            </div>
            <div>
              <button
                className="bg-[#FF9F0D] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={(e) => handleAddToCart(e, food)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">No products available.</p>
      )}
    </div>
  );
}
