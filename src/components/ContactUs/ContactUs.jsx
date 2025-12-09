import React from "react";
import { Checkbox, Label } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../assets/Frame 267.svg";

export default function ContactUs() {
  return (
    <>
      <div className="container m-auto mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4   text-[#192E4D]">
            Contact Us
          </h1>
          <p className="text-[#757575] text-lg mx-5">
            We're here to help! Reach out with any questions, and we'll respond
            as soon as possible .
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center my-10">
          <div className="w-full md:w-6/12 ">
            <div className="  justify-start items-center md:flex hidden">
              <img className="w-[450px] h-[450px]" src={img1} />
            </div>
          </div>
          <div className="w-full md:w-5/12 mx-5">
            <form class="">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl  border-2 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Full Name
                </label>
              </div>

              <div class="relative z-0  mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block pt-5  w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Phone number
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_subject"
                  id="floating_subject"
                  class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl  border-2 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_subject"
                  class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Subject
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <textarea
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl  border-2 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer h-[200px]"
                  placeholder=""
                ></textarea>
                <label
                  for="floating_message"
                  class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Message
                </label>
              </div>

              <Link to={"/ReceivedMessage"}>
                <button
                  type="submit"
                  class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none mb-4 font-medium rounded-2xl   w-full px-5 py-3 text-center  text-xl "
                >
                  Submit
                </button>
              </Link>
              <p className="text-center mb-4 text-lg text-[#757575]">or</p>
              <a
                href="https://wa.me/966548459312"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white duration-[0.5s] bg-[#25D366] hover:bg-[#88f0ae] focus:ring-4 focus:outline-none mb-4 font-medium rounded-2xl px-5 py-3 text-center text-xl"
              >
                Chat on WhatsApp <i className="fa-brands fa-whatsapp"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
