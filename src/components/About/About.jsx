import MainSection from '../MainSection/MainSection';
import Subheading from '../Subheading/Subheading';
import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

const About = () => {
  return (
    <MainSection id="about">
      <Subheading headingText="About" />
      <Bio />
      <Skills />
    </MainSection>
  );
};

export default About;
