import { emailImage, githubImage, linkedInImage } from '../../assets/images';
import Image from '../Image/Image';
import Link from '../Link/Link';
import styles from './ContactLinks.module.css';

// Represents the Contact Links component in the Contact component.
const ContactLinks = () => {
  // An array of links that can be expanded or reduced in the future.
  const links = [
    {
      src: emailImage,
      href: 'mailto:olsenjames1116@gmail.com',
      openInNewTab: false,
    },
    {
      src: githubImage,
      href: 'https://github.com/olsenjames1116',
      openInNewTab: true,
    },
    {
      src: linkedInImage,
      href: 'https://www.linkedin.com/in/james-olsen-b14898126/',
      openInNewTab: true,
    },
  ];

  return (
    <ul className={styles.contactLinks}>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} target={link.openInNewTab ? '_blank' : null}>
            <Image src={link.src} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
