import React, { createContext, useState } from "react";

interface IModalContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ModalContext = React.createContext<IModalContext>({
  openModal: false,
  setOpenModal: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
} as IModalContext);

function ModalProvider({ children }: any) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
