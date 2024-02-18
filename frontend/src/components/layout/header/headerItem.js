const HeaderItem = (props) => {
    return (
        <a href={props.href} className={props.className} onClick={props?.onClose}>{props.title}</a>
    )
}

export default HeaderItem;