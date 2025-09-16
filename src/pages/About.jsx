import { assets } from "../assets/assets";
import Sub from "../components/subscribe";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="w-[90%] max-w-6xl m-auto py-10">
      <div className="text-center text-3xl mb-10">
        <Title first="ABOUT" second="US" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            className="w-full max-w-md rounded-lg shadow-md"
            src={assets.about_img}
            alt="About us"
          />
        </div>

        <div className="space-y-6 text-gray-600">
          <p className="text-[17px] leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-[17px] leading-relaxed font-medium">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
        </div>
      </div>
      <Sub />
    </div>
  );
}
