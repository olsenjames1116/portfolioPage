import Section from '../Section/Section';
import Subheading from '../Subheading/Subheading';
import Projects from '../Projects/Projects';

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Subheading headingText="Portfolio" />
      <Projects />
    </Section>
  );
};

export default Portfolio;
