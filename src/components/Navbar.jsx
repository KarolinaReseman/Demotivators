import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/navbar.css"

export default function NavbarComponent (){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Demotivators</h3>
            <nav ref={navRef}>
                    <a href="/HOME">Home</a>
                    <a href="/HOT_DEMOTIVATORS">Hot Demotivators</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    // <nav className="nav">
    //     <ul>
    //         <li>
    //             <a href="/HOME" className="site-title">Home</a>
    //         </li>
    //         <li>
    //             <a href="/HOT_DEMOTIVATORS">HOT demotivators</a>
    //         </li>
    //     </ul>
    // </nav>
    )
}
