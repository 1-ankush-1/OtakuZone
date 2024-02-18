import ReactDom from "react-dom";
import React from "react";

const BackDrop = (props) => {
    return (
        <div className="fixed inset-0 bg-black opacity-50" onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div>{props.children}</div>
        </div>
    )
}


const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, document.getElementById("cart-overlay"))}
            {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, document.getElementById("cart-backdrop"))}
        </>
    )
}

export default Modal;