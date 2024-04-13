import { profileImage } from '../../assets/images';
import Container from '../Container/Container';
import Image from '../Image/Image';
import './Bio.css';

// Represents the Bio component inside the About section.
const Bio = () => {
  return (
    <Container className="bio">
      <Image alt="Photo of self" src={profileImage} />
      <p>
        I am a motivated developer with over a year of experience building and
        deploying web applications. With a background in hospitality and leading
        Marines, I welcome challenges and enjoy problem-solving, especially as
        part of a team. Facing each day with a growth mindset and a passion for
        web development, I am looking to continue evolving in this constantly
        changing industry.
      </p>
    </Container>
  );
};

export default Bio;
