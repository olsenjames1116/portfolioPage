import PropTypes from 'prop-types';
import styles from './Section.module.css';

/* Used as a custom component for custom behavior and props checking in the 
main section. */
const Section = ({ id, children }) => {
  return (
    <section className={styles.mainSection} id={id}>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
