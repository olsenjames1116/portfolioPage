import Section from '../Section/Section';
import Subheading from '../Subheading/Subheading';
import Projects from '../Projects/Projects';

// Represents the Portfolio component in the main section of the page.
const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Subheading headingText="Portfolio" />
      <Projects />
    </Section>
  );
};

export default Portfolio;
