export default function CheckoutForm({ type, lableName, id }) {
  return (
    <div className="pb-2 pr-20 text-sm">
      <div className="flex flex-col">
        <label className="">{lableName} :</label>
        <input
          type={type}
          id={id}
          name={id}
          required
          className="w-[60%] bg-yellow-50 border-2 rounded"
        ></input>
      </div>
    </div>
  );
}
