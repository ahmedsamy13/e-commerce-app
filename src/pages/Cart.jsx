import { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import Title from "./../components/Title";
import { assets } from "../assets/assets";

export default function Cart() {
  const { cartItems, products, currency, updateQuantity, getCartTotal } =
    useContext(Shopcontext);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title first="your" second="cart" />
      </div>

      <div>
        {cartItems.map((item, index) => {
          const productData = products.find((p) => p._id === item.id);
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-500 
grid grid-cols-[4fr_1fr_1fr_1fr] sm:grid-cols-[4fr_2fr_1fr_1fr] 
items-center gap-4"
            >
              <div className="flex items-center gap-6">
                <img src={productData.image[0]} className="w-16" alt="" />
                <div>
                  <p className="text-sm font-medium">{productData.name}</p>
                  <p className="text-xs text-gray-400">Size: {item.size}</p>
                </div>
              </div>

              <div>
                {currency}
                {productData.price}
              </div>

              <input
                type="number"
                min={1}
                value={item.quantity || 1}
                onChange={(e) => {
                  const newQty = Number(e.target.value);
                  updateQuantity(item.id, item.size, newQty);
                }}
                className="border max-w-10 sm:max-w20 px-1 sm:px-2 py-1"
              />

              <img
                onClick={() => updateQuantity(item.id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 cursor-pointer"
                alt="delete"
              />
            </div>
          );
        })}
      </div>
      <div className=" my-15 text-center mt-6">
        <p className="text-lg font-semibold">
          Subtotal: {currency}
          {getCartTotal()}
        </p>
      </div>
    </div>
  );
}
