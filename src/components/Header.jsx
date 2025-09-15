import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className="grid grid-cols-2 lg:w-[80%] m-auto max-md:grid-cols-1 max-sm:grid-cols-1 border border-gray-400">
      {/* {left} */}
      <div className="w-full flex items-center justify-center py-10">
        <div className="text-[#414141]">
          <div className="flex place-items-center gap-2">
            <p className="w-8 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm ">OUR BEST SELLERS</p>
          </div>
          <h1 className="text-5xl prata-regular leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold TEXT-SM md:text-base ">SHOP NOW</p>
            <p className="w-8 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div>
        <img src={assets.hero_img} className="w-full max-md:w-full" alt="" />
      </div>
    </div>
  );
}
