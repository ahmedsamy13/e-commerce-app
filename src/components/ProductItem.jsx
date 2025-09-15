import { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(Shopcontext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-105 transition ease-in-out"
          src={image[0]}
          alt=""
        />
        <p className="pt-2 pb-2 text-sm font-extralight">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
