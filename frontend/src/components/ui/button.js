const Button = (props) => {
    return (
        <div>
            <button type={props.type}>{props.value}</button>
        </div>
    )
}

export default Button;