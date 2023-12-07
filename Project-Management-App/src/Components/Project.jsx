import InputForm from "./InputForm";
import { useRef } from "react";
export default function Project({ saveCreatedProject, onSelect }) {
  const tasks = useRef();

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  return (
    <>
      {/* <div className="text-lg flex float-right">
        <p className="text-black font-medium px-6 py-2">
          <button type="submit">Cancel</button>
        </p>
        <p className="bg-black text-yellow-50 font-bold px-2 py-2 w-20 text-center rounded">
          <button onClick={Save} type="submit">
            Save
          </button>
        </p>
      </div>

      <div className="pt-10 pb-5">
        <InputForm ref={title} type="text" labelName="TITLE"></InputForm>
        <InputForm
          ref={desc}
          type="text"
          textarea
          labelName="DESCRIPTION"
        ></InputForm>
        <InputForm ref={date} type="date" labelName="DUE DATE"></InputForm>
      </div> */}
    </>
  );
}
