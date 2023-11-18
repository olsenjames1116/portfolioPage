import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './Subheading.module.css';

const Subheading = ({ headingText }) => {
  return (
    <Container className={styles.subheading}>
      <hr />
      <h2>{headingText}</h2>
      <hr />
    </Container>
  );
};

Subheading.propTypes = {
  headingText: PropTypes.string,
};

export default Subheading;
