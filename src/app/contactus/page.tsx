"use client";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("All fields are required.");
      return;
    }
    setError("");
    toast.success("Submitted successfully!");
    // You can add further logic here for actual form submission.
  };

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-[#FF9F0D]">
              Contact Us
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

             
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-md text-gray-600">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#FF9F0D] focus:bg-white focus:ring-2 focus:ring-[#FF9F0D] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-md text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#FF9F0D] focus:bg-white focus:ring-2 focus:ring-[#FF9F0D] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-md text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#FF9F0D] focus:bg-white focus:ring-2 focus:ring-[#FF9F0D] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                  {error && <p className="text-red-600 mt-2">{error}</p>}
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto justify-center pt-2 font-bold text-xl before:ease relative h-12 w-32 rounded overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#FF9F0D] before:transition-all before:duration-300 hover:text-white hover:shadow-[#FF9F0D] hover:before:-rotate-180"
                    >
                      <span className="relative z-10">Submit</span>
                    </button>
                  </div>
                </div>
              
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-[#FF9F0D] text-xl">Foodtuck@email.com</a>
                <br />
                <br />
                <span className="inline-flex">
                  <a href="" className="text-gray-500">
                    <FaFacebookF className="text-blue-600 w-5 h-5" />
                  </a>
                  <a href="" className="ml-4 text-gray-500">
                    <AiOutlineTwitter className="text-sky-500 w-6 h-6" />
                  </a>
                  <a href="" className="ml-4 text-gray-500">
                    <FaInstagram className="w-5 h-5 text-red-400" />
                  </a>
                  <a href="" className="ml-4 text-gray-500">
                    <FaYoutube className="text-red-600 w-5 h-5 " />
                  </a>
                </span>
              </div>
            </div>
          </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
