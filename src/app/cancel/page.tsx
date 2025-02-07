"use client";

import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-md px-8 py-10 bg-white shadow-lg rounded-xl border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">Payment Cancelled</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          We're sorry, but it seems that your payment was cancelled. If this was a mistake or if you changed your mind, please feel free to try again.
        </p>

        <button
          onClick={() => router.push("/")}
          className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF7F0D] transition-colors duration-200 ease-in-out focus:outline-none"
        >
          Back to Homepage
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Need help? <a href="mailto:support@yourdomain.com" className="text-[#FF9F0D]">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}
