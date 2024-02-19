const Card = (props) => {
    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white shadow-sm w-full aspect-square overflow-hidden card-container h-full p-4">
            {props.children}
        </div>
    )
}

export default Card;