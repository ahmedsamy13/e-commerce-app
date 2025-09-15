import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 lg:w-[80%] m-auto max-md:grid-cols-1 ">
        <div className="flex flex-col col-span-2 max-md:col-span-1  gap-6 ">
          <img src={assets.logo} alt="logo" className="w-36" />
          <p className="max-w-[450px] font-light text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-6 max-md:mt-5 ">
          <h2 className="text-2xl font-bold">Company</h2>
          <ul className="font-extralight space-y-2">
            <li className="">
              <Link className="hover:text-gray-500 duration-200" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 duration-200" to="/about">
                About us
              </Link>
            </li>
            <li className="hover:text-gray-500 duration-200">Delivery</li>
            <li className="hover:text-gray-500 duration-200">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-md:mt-5 ">
          <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
          <ul className="font-extralight space-y-2">
            <li>01090583919</li>
            <li>ahmedsamy@gmail.com</li>
            <li>smsm</li>
          </ul>
        </div>
      </div>
      <hr className=" mt-5 lg:w-[70%] m-auto opacity-20" />
      <p className="text-center text-sm p-5 text-black">
        Copyright 2025@ smsm - All Right Reserved.
      </p>
    </>
  );
}
