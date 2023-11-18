import PropTypes from 'prop-types';
import styles from './Section.module.css';

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
