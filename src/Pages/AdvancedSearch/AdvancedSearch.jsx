//styles
import "./AdvancedSearch.scss"

//react
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";

//components
import SearchButton from "../../components/atoms/SearchButton/SearchButton";

const AdvancedSearch = () => {
    return (
        <div className='AdvancedSearch'>
            <div className="title">
                <h2>Advanced Search</h2>
                <Link>
                    <p>Search tips</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bc5fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                        <line x1="12" y1="19" x2="12" y2="19.01" />
                    </svg>
                </Link>
            </div>
            <div className="containerMain">
                <div className="option">
                    <label>Quick search form fieldFind articles with these terms</label>
                    <InputText />
                </div>
                <div className="info">
                    <div className="option">
                        <label>Author(s)</label>
                        <InputText />
                    </div>
                    <div className="option">
                        <label>Year(s)</label>
                        <InputText />
                    </div>
                </div>
                <div className="option">
                    <label>In this journal or book title</label>
                    <InputText />
                </div>
                <div className="option">
                    <label>Title</label>
                    <InputText />
                </div>
                <div className="option">
                    <label>ISSN or ISBN</label>
                    <InputText />
                </div>
                <div className="info2">
                    <div className="option">
                        <label>Volume</label>
                        <InputText />
                    </div>
                    <div className="option">
                        <label>Page</label>
                        <InputText />
                    </div>
                    <div className="option">
                        <label>Issue(s)</label>
                        <InputText />
                    </div>
                </div>
                <div className="cButton">
                    <SearchButton/>
                </div>
            </div>
        </div>
    )
}

export default AdvancedSearch