const Button = (props) => {
    return (
        <button
            type={props.type}
            className="bg-black hover:bg-gray-700 text-white font-bold py-0.5 px-3 rounded"
            onClick={props?.onHandleClick}
        >
            {props.children}
        </button>
    )
}

export default Button;