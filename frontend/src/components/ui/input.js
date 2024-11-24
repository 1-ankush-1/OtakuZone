const Input = (props) => {
    return (
        <div className="space-y-2">
            <label className="text-xs" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                id={props.id}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-xs ${props.className}`}
                name={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input;
