import { Logo } from "./Logo";
import { Search } from "./Search";

function Nav({ children }) {
  return (
    <nav className="nav-ber">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

export default Nav;
