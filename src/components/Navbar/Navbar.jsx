import Link from '../Link/Link';

const Navbar = () => {
    return (
        <nav>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link> 
        </nav>
    )
}

export default Navbar;