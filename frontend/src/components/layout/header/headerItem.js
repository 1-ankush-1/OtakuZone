import { NavLink } from "react-router-dom";

const HeaderItem = (props) => {
    return (
        <NavLink to={props.href} className={({ isActive }) => isActive ? `${props.className + " text-white"}` : props.className} onClick={props?.onClose} end>{props.title}</NavLink>
    )
}

export default HeaderItem;
