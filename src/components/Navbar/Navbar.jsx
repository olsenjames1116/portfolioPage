import Link from '../Link/Link';
import './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <Link href="#about">About</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
