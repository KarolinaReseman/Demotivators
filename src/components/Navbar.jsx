import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
export default function NavbarComponent() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Demotivators</h3>
      <nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/hot">Hot Demotivators</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
