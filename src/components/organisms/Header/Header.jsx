//styles
import "./Header.scss"

//assets
import logo from "../../../assets/Logos/logo_white.png"
import logoBlack from "../../../assets/Logos/logo_black.png"
import Menu from '../../../assets/images/menu.png'
import home from "../../../assets/images/home.png"
import catalogs from "../../../assets/images/catalogs.png"
import at from "../../../assets/images/at.png"
import events from "../../../assets/images/events.png"
import Moon from '../../../assets/images/moon.png'
import Sun from '../../../assets/images/sol.png'

//react
import { useNavigate, Link, NavLink } from "react-router-dom"
import { useStateContext } from '../../../context/ContextProvider'
import { useEffect, useRef, useState } from "react"

//components
import Sidebar from "../../molecules/Sidebar/Sidebar"



const Header = () => {
    const navigate = useNavigate()

    const { handleTheme, theme, setTheme, openSidebar, setOpenSidebar } = useStateContext()
    const [myTheme, setMyTheme] = useState("")
    const [showCategories, setShowCategories] = useState(false)

    const navBar = [
        { title: "Home", icon: home, url: "/" },
        { title: "Services", icon: catalogs, url: "#" },
        { title: "Events", icon: events, url: "#" },
        { title: "Publish", icon: at, url: "#" },
    ]

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setMyTheme(storedTheme)
        if (storedTheme === "dark") {
            setTheme(true);
        }
    }, [theme])

    return (
        <header className='Header'>
            <div className="left">
                <div className="logo">
                    {myTheme === "light" ? (
                        <img className="logoImg" src={logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    ) : (
                        <img className="logoImg" src={logoBlack} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    )}
                </div>
                <nav className="navHeader">
                    {navBar.map((element, index) => {
                        return (
                            <li className="optionsNav" key={index}>
                                <NavLink to={element.url} className={"navlink_k"}>
                                    {/* <img className="icon_" src={element.icon} /> */}
                                    {element.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </nav>


            </div>
            <section className="user_t">
                <div className="ntc_nav">
                    <NavLink to={"/register"} className={"user_new-r"}>Create account</NavLink>
                    <NavLink to={"/login"} className={"user_new-r"}>Sign in</NavLink>
                </div>
                {/* Este es el boton del cambio de tema */}
                <div className={`swith_`} onClick={handleTheme}>
                    {myTheme === "light" ? (
                        <img src={Moon} alt="" className="darkl" />
                    ) : (
                        <img src={Sun} alt="" className="img_icon" />
                    )}
                </div>
                <div className="cnt_menu" onClick={() => setOpenSidebar(true)}>
                    <img src={Menu} alt="" className="clMenu_u" />
                </div>
            </section>

            {openSidebar &&
                <Sidebar datas={navBar} />
            }
        </header>
    )
}

export default Header