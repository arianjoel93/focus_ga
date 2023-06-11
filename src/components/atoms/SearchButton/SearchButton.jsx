//styles
import "./SearchButton.scss"

//assets
import search from "../../../assets/images/search.png"

//react
import { useNavigate } from "react-router-dom"

const SearchButton = ({url}) => {
    const navigate = useNavigate()
    return (
        <button className="btnSearch" onClick={() => navigate(`${url}`)}>
            Search
            <img src={search} />
        </button>
    )
}

export default SearchButton