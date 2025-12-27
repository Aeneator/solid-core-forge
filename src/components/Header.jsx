import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import NavLink from "./NavLink";
import logo from "../assets/solid-core-forge-logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "3D Printer", path: "/printer-info" },
  { name: "Models", path: "/models" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>


        <h1 className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </NavLink>
        </h1>

        <nav className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} fontSize="--font-size-xl">
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              fontSize="--font-size-xl"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
