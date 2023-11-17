export default function CustomInput({ label, invalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";
  if (invalid) {
    labelClass += " text-red-500";
    inputClass += " text-red-500 bg-red-100 border-red-500";
  } else {
    labelClass += " text-stone-300";
    inputClass += " text-grey-700 bg-stone-300 ";
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}
