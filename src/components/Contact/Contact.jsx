import { emailImage, githubImage, linkedInImage } from '../../assets/images';
import Image from '../Image/Image';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <span>olsenjames1116@gmail.com</span>
      <Image src={emailImage} />
      <Image src={githubImage} />
      <Image src={linkedInImage} />
    </section>
  );
};

export default Contact;
