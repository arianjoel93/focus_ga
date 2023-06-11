//styles
import "./ScrollButton.scss"

//react
import { useEffect, useState } from "react";

const ScrollButton = ({id}) => {

    const [scroll, setScroll] = useState(0)

    //These functions are for scrolling to the top of the page.--------------------------------
    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    });

    const handleClick = () => {
        document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    }

    //------------------------------------------------------------------------------------------


    return (
        <div className={scroll >= 1400 ? "btnScroll activeScroll" : "btnScroll"}>
            <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="2.5" stroke="#120f1d" fill="none">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </div>
    )
}

export default ScrollButton