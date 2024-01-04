export default function Form({ type, lableName, span }) {
  return (
    <div className="pb-2 pr-20 text-sm">
      <div className="flex flex-col">
        <lable>{lableName} :</lable>
        <input
          type={type}
          required
          className="w-[60%] bg-yellow-50 border-2 rounded"
        ></input>
      </div>
    </div>
  );
}
