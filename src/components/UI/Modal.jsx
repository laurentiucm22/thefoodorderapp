import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const prortalElemnt = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, prortalElemnt)}

      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        prortalElemnt
      )}
    </>
  );
};

export default Modal;
