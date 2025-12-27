import { Link, useLocation } from "react-router-dom";
import styles from "./NavLink.module.css";

export default function NavLink({ to, children, onClick, fontSize }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
      style={fontSize ? { fontSize: `var(${fontSize})` } : undefined}
    >
      {children}
    </Link>
  );
}
