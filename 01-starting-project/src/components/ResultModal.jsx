import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, leftOverTime, onReset },
  ref
) {
  const leftOverTimeInSeconds = (leftOverTime / 1000).toFixed(2);
  const score = (1 - leftOverTimeInSeconds / targetTime).toFixed(2) * 100;
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Generally modals are placed in html dom according to the place they are used. But to change the place of it in html dom, we use createPortal(jsx,location in dom)
  return createPortal(
    // if we want to close dialog box with esc key, add built-in onClose method like below.
    // <dialog ref={dialog} className="result-modal" onClose={onReset}>
    <dialog ref={dialog} className="result-modal">
      <h2>
        {leftOverTimeInSeconds <= 0
          ? "You Lost!"
          : `Success!! Your score: ${score}`}
      </h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>{" "}
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{leftOverTimeInSeconds} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
