import Section from '../Section/Section';
import Subheading from '../Subheading/Subheading';
import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

// Represents the About section in main content.
const About = () => {
  return (
    <Section id="about">
      <Subheading headingText="About" />
      <Bio />
      <Skills />
    </Section>
  );
};

export default About;
