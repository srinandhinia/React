import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return (
    <dialog ref={dialog} className="[modal] bg-orange-50 " onClose={onClose}>
      {children}
    </dialog>
  );
}
