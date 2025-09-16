export default function Title({ first, second }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {first} <span className="text-black">{second}</span>
      </p>
      <p className="w-8 h-[2px] bg-[#414141]"></p>
    </div>
  );
}
