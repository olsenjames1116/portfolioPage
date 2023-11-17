import { profileImage } from '../../assets/images';
import Container from '../Container/Container';
import Image from '../Image/Image';

const Bio = () => {
  return (
    <Container className="bio">
      <Image style={{ height: '200px', width: 'auto' }} src={profileImage} />
      <p>
        Hello, I&#39;m James. I am a self-taught, motivated developer with a
        year of experience building web applications. With a background in
        hospitality and leading Marines, I welcome challenges and enjoy
        problem-solving, especially as part of a team. Facing each day with a
        growth mindset, I am willing and able to learn. I hope to one day apply
        my skills and experience, along with my passion for web development, to
        the right company.
      </p>
    </Container>
  );
};

export default Bio;
