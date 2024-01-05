export default function Error({ title, errorMsg }) {
  return (
    <div className="border-2 bg-red-300 w-[30%] items-center mx-auto text-black">
      <h2 className="font-semibold">{title}</h2>
      <p>{errorMsg}</p>
    </div>
  );
}
