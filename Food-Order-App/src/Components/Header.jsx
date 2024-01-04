import { useRef } from "react";
import logoImg from "../assets/logo.jpg";
import CartModal from "./CartModal";

export default function Header({ cartValue }) {
  const dialog = useRef();

  function handleShowModal() {
    dialog.current.showModal();
  }
  return (
    <>
      <div className="flex p-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 border-2 border-amber-400 rounded-full"
            src={logoImg}
            alt="React Food Logo"
          ></img>
          <h2 className=" text-amber-400 tracking-widest font-semibold text-xl uppercase">
            ReactFood
          </h2>
        </div>
        <div className=" text-amber-400 text-xl">
          <button className="flex gap-1" onClick={handleShowModal}>
            <h2>
              Cart <span></span>
            </h2>
            <div>( {cartValue} )</div>
          </button>
        </div>
      </div>
      <CartModal ref={dialog} />
    </>
  );
}
