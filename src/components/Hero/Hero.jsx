import { heroImage } from '../../assets/images';
import Image from '../Image/Image';

const Hero = () => {
  return (
    <section>
      <Image style={{ width: '100vw', height: 'auto' }} src={heroImage} />
      <h1>James Olsen</h1>
      <h1>Full Stack Web Developer</h1>
    </section>
  );
};

export default Hero;
