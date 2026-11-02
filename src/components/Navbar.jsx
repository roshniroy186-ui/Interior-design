import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          ROSHNI INTERIOR
        </Link>


        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/portfolio">Portfolio</NavLink>

          <NavLink to="/testimonials">
            Testimonials
          </NavLink>

          <NavLink to="/contact">Contact</NavLink>

        </nav>


        {/* Desktop CTA */}
        <Link
          to="/consultation"
          className="navbar-button"
        >
          Get Consultation
        </Link>


        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-menu">

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/portfolio" onClick={closeMenu}>
            Portfolio
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={closeMenu}
          >
            Testimonials
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/consultation"
            className="mobile-menu-button-link"
            onClick={closeMenu}
          >
            Get Consultation
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;
