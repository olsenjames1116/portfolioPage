import Link from '../Link/Link';
import './Navbar.module.css';

// Represents the Navbar component at the top of the page.
const Navbar = () => {
  return (
    <nav>
      <Link tabIndex={0} href="#about">
        About
      </Link>
      <Link tabIndex={0} href="#portfolio">
        Portfolio
      </Link>
      <Link tabIndex={0} href="#contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
