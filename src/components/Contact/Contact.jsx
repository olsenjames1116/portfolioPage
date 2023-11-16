import { emailImage, githubImage, linkedInImage } from '../../assets/images';
import Image from '../Image/Image';
import Link from '../Link/Link';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <span>olsenjames1116@gmail.com</span>
      <Link href="mailto:olsenjames1116@gmail.com">
        <Image src={emailImage} />
      </Link>
      <Link href="https://github.com/olsenjames1116" target="_blank">
        <Image src={githubImage} />
      </Link>
      <Link href="" target="_blank">
        <Image src={linkedInImage} />
      </Link>
    </section>
  );
};

export default Contact;
