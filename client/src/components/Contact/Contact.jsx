import Section from '../Section/Section';
import Subheading from '../Subheading/Subheading';
import Container from '../Container/Container';
import ContactLinks from '../ContactLinks/ContactLinks';
import styles from './Contact.module.css';

// Represents the Contact component in the main content of the page.
const Contact = () => {
  return (
    <Section id="contact">
      <Subheading headingText="Contact" />
      <Container className={styles.contactInfo}>
        <span>olsenjames1116@gmail.com</span>
        <ContactLinks />
      </Container>
    </Section>
  );
};

export default Contact;
