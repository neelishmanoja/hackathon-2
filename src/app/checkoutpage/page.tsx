"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Food } from "../../../typings";
import toast from "react-hot-toast";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Food[]>([]);

  useEffect(() => {
    // Local Storage se cart items fetch karein
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch(`${window.location.origin}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const session = await response.json();
    console.log(session); // Log the response to see the session ID

    if (session.error) {
      toast.error("Error creating checkout session");
      setLoading(false);
      return;
    }

    // Check session id before proceeding
    if (!session.id) {
      toast.error("Session ID not received from backend");
      setLoading(false);
      return;
    }

    // Proceed to checkout
    try {
      await stripe?.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error('Error during Stripe redirect:', error);
      toast.error("Stripe redirection failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <div className="w-full max-w-lg px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>

        {cartItems.length > 0 ? (
          <div className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                <p className="text-lg font-medium text-gray-700">{item.name}</p>
                <p className="text-lg text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        <div className="flex justify-between items-center mt-6 mb-4">
          <p className="text-xl font-semibold text-gray-800">Total:</p>
          <p className="text-xl text-gray-700">
            ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full py-3 px-6 text-white font-semibold rounded-lg focus:outline-none transition duration-200 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF9F0D] hover:bg-[#FF7F0D]"
          }`}
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
}
