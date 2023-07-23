import { Logo } from "./Logo";

function Nav({ children }) {
  return (
    <nav className="nav-ber">
      <Logo />
      {children}
    </nav>
  );
}

export default Nav;
