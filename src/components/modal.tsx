import { createPortal } from "react-dom";

function Modal({ children, handleCloseModal }: any) {
  return createPortal(
    <div onClick={handleCloseModal} className="modal-background">
      {children}
    </div>,
    document.getElementById("modal") as Element
  );
}

export { Modal };
