import Container from '../Container/Container';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ButtonContainer.module.css';

const ButtonContainer = ({ handleLivePreviewClick, handleSourceCodeClick }) => {
  return (
    <Container className={styles.buttonContainer}>
      <Button type="button" handleClick={handleLivePreviewClick}>
        Live Preview
      </Button>
      <Button type="button" handleClick={handleSourceCodeClick}>
        Source Code
      </Button>
    </Container>
  );
};

ButtonContainer.propTypes = {
  handleLivePreviewClick: PropTypes.func,
  handleSourceCodeClick: PropTypes.func,
};

export default ButtonContainer;
