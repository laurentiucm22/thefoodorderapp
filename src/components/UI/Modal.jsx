import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => (
  <div className={classes.backdrop} onClick={props.onClose} />
);

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
