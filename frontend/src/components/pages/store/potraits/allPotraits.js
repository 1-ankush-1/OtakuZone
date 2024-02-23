import { useLocation, useNavigate} from "react-router-dom";

const AllPotraits = (props) => {
    //hold all url info
    const location = useLocation();
    const navigate = useNavigate();

    //read query params
    const queryParams = new URLSearchParams(location.search)
    const isAsc = queryParams.get("sort");

    //navigate so rerender same page with this query params
    const handleSortList = () => {
        navigate("/potraits?sort=" + `${isAsc === "asc" ? "desc" : "asc"}`);
    }

    return (
        <div>
            <button onClick={handleSortList}>sort {isAsc === "asc" ? "desc" : "asc"}</button>
        </div>
    )
}


export default AllPotraits;