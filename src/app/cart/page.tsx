"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Food } from "../../../typings";
import { getCartItems, removeFromCart, updateCartquantity } from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation"; // Import router

export default function CartPage() {
  const [cartItem, setCartItem] = useState<Food[]>([]);
  const router = useRouter(); // Initialize router


  useEffect(() => {
    setCartItem(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItem(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartquantity(id, quantity);
    setCartItem(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.quantity + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.quantity > 1) handleQuantityChange(id, product.quantity - 1);
  };

  const calculatedTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceed = () => {
    router.push("/checkoutpage")
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        setCartItem([]);
      }
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItem.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center space-x-4">
               {item.image &&(
                <Image 
                src={urlFor(item.image).url()}
                className="w-16 h-16 object-cover rounded-md"
                alt={item.name}
                width={500}
                height={500}
                />
               )}
                 
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                  onClick={() => handleDecrement(item._id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                  onClick={() => handleIncrement(item._id)}>
                  +
                </button>
              </div>
              <div className="mt-4 md:mt-0">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleRemove(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-lg font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              onClick={handleProceed}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
