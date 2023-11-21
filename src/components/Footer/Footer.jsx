import AuthorCredit from '../AuthorCredit/AuthorCredit';
import AssetCredit from '../AssetCredit/AssetCredit';
import './Footer.css';

// Represents the Footer component at the bottom of the page.
const Footer = () => {
  return (
    <footer>
      <AuthorCredit />
      <AssetCredit />
    </footer>
  );
};

export default Footer;
