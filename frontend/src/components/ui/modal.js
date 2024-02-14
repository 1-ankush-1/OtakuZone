import ReactDom from "react-dom";

const BackDrop = (props) => {
    return (
        <div onClick={props.onClose}></div>
    )
}


const ModalOverlay = (props) => {
    return (
        <div>
            {props.children}
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