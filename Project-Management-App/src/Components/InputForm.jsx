import { forwardRef, useState } from "react";
const InputForm = forwardRef(function InputForm({ labelName }, ref) {
  return (
    <form className="justify-center P-8 pb-6 ">
      <div className=" pt-2 pb-2 w-full">
        <label className=" text-zinc-400 font-bold w-max">{labelName}</label>
      </div>
      <div>
        {labelName === "DUE DATE" ? (
          <input
            ref={ref}
            className=" bg-zinc-300 w-full py-3"
            type="date"
            required
          />
        ) : (
          <input
            ref={ref}
            className=" bg-zinc-300 w-full py-3"
            type="text"
            required
          />
        )}
      </div>
    </form>
  );
});
export default InputForm;
