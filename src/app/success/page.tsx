"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const [sessionData, setSessionData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Get the session ID from the URL (Stripe adds it as a query parameter)
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");

    if (sessionId) {
      // Fetch session details from the new API route
      fetch(`/api/get-session/${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          setSessionData(data);
        })
        .catch((error) => {
          console.error("Error fetching session data:", error);
        });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-lg px-8 py-10 bg-white shadow-lg rounded-xl border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Payment Successful!</h1>
        
        {sessionData ? (
          <div className="space-y-4 mb-6">
            <p className="text-lg text-green-600">Thank you for your purchase. Your payment was successful.</p>
            <div className="text-sm text-gray-600">
              <p><span className="font-medium">Order ID:</span> {sessionData.id}</p>
              <p><span className="font-medium">Amount:</span> ${sessionData.amount_total / 100}</p>
              {/* You can display more session details here */}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading payment details...</p>
        )}

        <button
          onClick={() => router.push("/")}
          className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF7F0D] transition-colors duration-200 ease-in-out"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
