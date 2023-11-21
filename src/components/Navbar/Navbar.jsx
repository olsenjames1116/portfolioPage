import Link from '../Link/Link';
import './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <Link tabIndex={1} href="#about">
        About
      </Link>
      <Link tabIndex={1} href="#portfolio">
        Portfolio
      </Link>
      <Link tabIndex={1} href="#contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
