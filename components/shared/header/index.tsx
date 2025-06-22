import Logo from "../logo";
import NavLinks from "./nav-links";

const Header = () => {
  return (
    <header className="w-full bg-teal-900 h-20 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
