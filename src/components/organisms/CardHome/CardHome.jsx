import "./CardHome.scss"

const CardHome = ({ value, setSpecialySearch }) => {

    //fuction scroll
    const handleClick = (id) => {
        document.getElementById('fields')?.scrollIntoView({ behavior: "smooth" });
        setSpecialySearch(id)
    }

    return (
        <div className="cardHome" onClick={() => handleClick(value.title)}>
            <button className="element">
                <p>{value.title}</p>
                <img src={value.image} />
            </button>
        </div>
    )
}

export default CardHome