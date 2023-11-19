import AuthorCredit from '../AuthorCredit/AuthorCredit';
import AssetCredit from '../AssetCredit/AssetCredit';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <AuthorCredit />
      <AssetCredit />
    </footer>
  );
};

export default Footer;
