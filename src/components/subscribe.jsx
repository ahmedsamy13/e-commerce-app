export default function Sub() {
  return (
    <div className="my-15 mb-40">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Subscribe now & get 20% off</h1>
        <p className=" text-gray-400 font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex justify-center items-center my-8">
        <form
          action="
        "
        >
          <input
            type="email"
            className=" w-70 p-3 border border-gray-300 focus:outline-gray-500 outline-0"
            placeholder="Enter Your Email"
            required
          />
          <button type="submit" className="bg-black w-36 p-3 text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
