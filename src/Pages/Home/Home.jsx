//styles
import "./Home.scss"

// //assets
import img1 from "../../assets/images/adn2.jpg"
import img2 from "../../assets/images/ai.png"
import img4 from "../../assets/images/stethoscope.jpg"
import img5 from "../../assets/images/virus.jpg"
import virus from "../../assets/images/virus2.jpg"
import fisica from "../../assets/images/periodic-table.jpg"
import derecho from "../../assets/images/graphics.png"
import books from "../../assets/images/books.jpg"
import img8 from "../../assets/images/bacteria.jpg"
import img9 from "../../assets/images/earth.png"
import img10 from "../../assets/images/ai.png"
import imgMain from "../../assets/images/pictureMain2.jpg"
import next from "../../assets/icons/next.svg"


//covers
import cover_0 from "../../assets/images/portadas/0.png"
import cover_1 from "../../assets/images/portadas/1.png"
import cover_2 from "../../assets/images/portadas/2.png"
import cover_3 from "../../assets/images/portadas/3.png"
import cover_4 from "../../assets/images/portadas/4.png"
import cover_5 from "../../assets/images/portadas/5.png"


//react
import { InputText } from 'primereact/inputtext';
import { Carousel } from "primereact/carousel"
import { RadioButton } from "primereact/radiobutton"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//components
import Journal from "../../components/organisms/Journal/Journal"
import SearchButton from "../../components/atoms/SearchButton/SearchButton"
import CardHome from "../../components/organisms/CardHome/CardHome"
import ScrollButton from "../../components/atoms/ScrollButton/ScrollButton"

const Home = () => {
    const navigate = useNavigate()
    const screen = window.screen.width
    const fields = [
        { title: "Life Sciences", image: virus },
        { title: "Health Sciences", image: img4 },
        { title: "Exacts Sciences", image: fisica },
        { title: "Social Sciences & Humanities", image: derecho },
        { title: "Journals & Books", image: books },
    ]
    //states
    const [products, setProducts] = useState(fields);
    const [lenguage, setLenguage] = useState('English');
    const [specialtySearch, setSpecialySearch] = useState('')

    //dataApi
    const data = [
        {
            id: 0,
            lenguage: "English",
            name: "Nature",
            image: cover_0,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Exacts Sciences",
            impact: 2.13,
            citescore: 3.19,
            volume: 11,
        },
        {
            id: 1,
            lenguage: "English",
            name: "PNAS",
            image: cover_1,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Life Sciences",
            impact: 4.32,
            citescore: 4.19,
            volume: 7,
        },
        {
            id: 2,
            lenguage: "English",
            name: "Science",
            image: cover_2,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.73,
            citescore: 8.9,
            volume: 25,
        },
        {
            id: 3,
            lenguage: "English",
            name: "Astronomy & Astrophysics",
            image: cover_3,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Exacts Sciences",
            impact: 5.81,
            citescore: 8.29,
            volume: 24,
        },
        {
            id: 4,
            lenguage: "Spanish",
            name: "Revista de Cardiología",
            image: cover_4,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.81,
            citescore: 7.39,
            volume: 33,
        },
        {
            id: 5,
            lenguage: "Spanish",
            name: "Genética Médica y Genómica",
            image: cover_5,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.81,
            citescore: 7.39,
            volume: 33,
        },
    ]
    const [dataApi, setDataApi] = useState(data)
    const numberJurnals = dataApi.length

    // var months
    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    // main gallery images
    const images = [
        { img: img1 },
        { img: img2 },
        { img: img5 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
    ]
    // current year
    let year = new Date().getFullYear()


    const responsiveOptions = [
        // {
        //     breakpoint: '1440px',
        //     numVisible: 4,
        //     numScroll: 1
        // },
        {
            breakpoint: '1280px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '660px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    //searcher
    useEffect(() => {
        // In this useEffect hook, the search process
        // for journals by specialty is carried out and
        const dataF = data
        let ind = []
        if (specialtySearch.length == 0) {
            setDataApi(data)
        } else if (specialtySearch == "Journals & Books") {
            setDataApi(data)
        } else {
            dataF.map((e, index) => {
                if (e.fields.includes(specialtySearch)) {
                    ind.push(dataF[index])
                } else {
                    setDataApi([])
                }
            })

            if (ind.length > 0) {
                setDataApi(ind)
            }
        }
    }, [specialtySearch])

    // top specialty carousel templates
    const productTemplate = (e) => {
        return (
            <CardHome value={e} setSpecialySearch={setSpecialySearch} />
        );
    };


    return (
        <div className='Home' id="home">
            <ScrollButton id={"home"} />
            <div className="imgMain">
                <img src={imgMain} />
            </div>
            <div className="containerG">
                <div className='searchMain'>
                    {screen < 767 && (
                        <Link to={'/advanced-search'} className="links">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#120f1d" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                            Advanced search
                        </Link>
                    )}
                    <div className="inputsSearch">
                        <InputText placeholder='Author(s)' />
                        <InputText placeholder='Find articles with these terms' />
                        <InputText placeholder='In this journal or book title' />
                        <SearchButton url={'/search'} />
                    </div>
                    <div className="avanced">
                        <p>Search for peer-reviewed journal articles and book chapters (including open access content)</p>
                        {screen >= 768 && (
                            <Link to={'/advanced-search'} className="links">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#120f1d" fill="none">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                                Advanced search
                            </Link>
                        )}
                    </div>
                </div>
                <div className="fields">
                    <Carousel value={products} numVisible={5} numScroll={1} responsiveOptions={responsiveOptions} showIndicators={false} className="custom-carousel" circular
                        itemTemplate={productTemplate} />
                </div>

                <fieldset>
                    <legend>Explore</legend>
                    <div className="lenguage">
                        <div className="options">
                            <RadioButton inputId="lenguage1" name="lenguage" value="Spanish" onChange={(e) => setLenguage(e.value)} checked={lenguage === 'Spanish'} />
                            <label htmlFor="lenguage1" className="ml-2">Include spanish publications</label>
                        </div>
                        <div className="options">
                            <RadioButton inputId="lenguage2" name="lenguage" value="English" onChange={(e) => setLenguage(e.value)} checked={lenguage === 'English'} />
                            <label htmlFor="lenguage2" className="ml-2">English publications</label>
                        </div>
                    </div>
                    {dataApi.length && (
                        <div className="journals">
                            {lenguage == 'English' ?
                                dataApi.map((e, index) => {
                                    return (
                                        e.lenguage == 'English' &&
                                        <Journal key={index} index={index} journal={e} />
                                    )
                                }) : dataApi.map((e, index) => {
                                    return (

                                        <Journal key={index} index={index} journal={e} />
                                    )
                                })}
                        </div>
                    )}
                    <div className='next'>
                        <div className="int_next">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#120f1d" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                            <Link to={'/advanced-search'}>Advanced search</Link>
                        </div>
                    </div>
                </fieldset>
                <fieldset >
                    <legend><span style={{ color: '#3e6d91', fontWeight: '700' }}>FOCUS G.A</span> statistics:</legend>
                    <div className="statistics">
                        <div className="metric">
                            <p>{numberJurnals}</p>
                            <span>Journals</span>
                        </div>
                        <div className="metric">
                            <p>{numberJurnals * 28}</p>
                            <span>Articles</span>
                        </div>
                        <div className="metric">
                            <p>{4}</p>
                            <span>Open Access</span>
                        </div>
                        <div className="metric">
                            <p>{16}</p>
                            <span>Books</span>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div >

    )
}

export default Home
