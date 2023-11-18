import PropTypes from 'prop-types';
import styles from './MainSection.module.css';

const MainSection = ({ id, children }) => {
  return (
    <section className={styles.mainSection} id={id}>
      {children}
    </section>
  );
};

MainSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default MainSection;
