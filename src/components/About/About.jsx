import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';
import Container from '../Container/Container';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <Container className="subheading">
        <hr />
        <h2>About</h2>
        <hr />
      </Container>
      <Bio />
      <Skills />
    </section>
  );
};

export default About;
