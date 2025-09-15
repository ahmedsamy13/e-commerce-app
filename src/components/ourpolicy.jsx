import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div className="grid lg:w-[70%] m-auto grid-cols-3 gap-5 max-md:grid-cols-1 text-center">
      <div className="">
        <div className="place-items-center">
          <img className="w-12" src={assets.exchange_icon} alt="" />
        </div>
        <div className="mt-5">
          <h3 className="mt-2">Easy Exchange Policy</h3>
          <p className="text-gray-500 my-1">
            We offer hassle free exchange policy
          </p>
        </div>
      </div>
      <div>
        <div className="place-items-center">
          <img className="w-12" src={assets.quality_icon} alt="" />
        </div>
        <div className="mt-5">
          <h3 className="mt-2">7 Days Return Policy</h3>
          <p className="text-gray-500 my-1">
            We provide 7 days free return policy
          </p>
        </div>
      </div>
      <div>
        <div className="place-items-center">
          <img className="w-12" src={assets.support_img} alt="" />
        </div>
        <div className="mt-5">
          <h3 className="mt-2">Best customer support</h3>
          <p className="text-gray-500 my-1">we provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
}
