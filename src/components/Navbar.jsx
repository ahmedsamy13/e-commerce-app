import { Link, NavLink } from "react-router-dom";
import { assets } from "./../assets/assets";
import Collection from "./../pages/Collection";
import About from "./../pages/About";
import { useContext, useState } from "react";
import { Shopcontext } from "../context/shopcontext";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { search, setSearch, getCartCount } = useContext(Shopcontext);
  return (
    <>
      <div className="flex items-center lg:w-[80%] m-auto justify-between py-5 font-medium">
        <img src={assets.logo} className="w-36 " alt="logo" />
        <ul className="flex space-x-6 gap-5 text-gray-700 max-md:hidden">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4  hidden border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex  flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-2/4  hidden border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink to="/about" className="flex  flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4  hidden border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink to="/contact" className="flex   flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4   hidden border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <Link to="/collection" onClick={() => setShowSearch(!showSearch)}>
            <img
              src={assets.search_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>
          <div className="group relative ">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded">
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p className="hover:text-black cursor-pointer">Orders</p>
                <p className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] text-[8px] aspect-square text-center leading-4 bottom-[-5px] bg-black text-white w-4 rounded-full">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer hidden max-md:block"
            alt=""
          />
        </div>
        {/* {side bar} */}
        <div
          className={`absolute top-0 right-0 duration-300 overflow-hidden h-screen  bg-white transition-all ${
            visible ? `w-full` : `w-0`
          } `}
        >
          <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3">
              <img
                onClick={() => setVisible(false)}
                src={assets.dropdown_icon}
                className="h-4 rotate-180 duration-200 cursor-pointer "
                alt=""
              />
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b-[2px]"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b-[2px]"
              to="/collection"
            >
              Collections
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b-[2px]"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b-[2px]"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      {showSearch ? (
        <div className="flex relative justify-center items-center gap-3">
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80  text-center p-1 border mb-5 outline-0 focus:outline-gray-800 focus:outline border-gray-300 rounded-3xl"
          />
          <img
            src={assets.cross_icon}
            className="h-3 relative bottom-3"
            onClick={() => {
              setShowSearch(false);
              setSearch("");
            }}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
