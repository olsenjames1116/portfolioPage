import { arrowLeftImage, arrowRightImage } from '../../assets/images';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ProjectImages.module.css';

// Represents the Project Images component in the Porfolio component.
const ProjectImages = ({ images, projectName }) => {
  // The index is set to navigate images.
  let index = 0;

  // Accessed to display the project images and avoid redundancy.
  const displayImages = () => {
    return images.map((image, index) => (
      <img
        key={index}
        className={styles.projectImage}
        alt="Project screenshot"
        src={image}
      />
    ));
  };

  // Loads images as they are navigated through. Used to avoid redundancy.
  const loadImage = n => {
    const imageNodes = document.querySelectorAll(
      `li.${projectName} img.${styles.projectImage}`,
    );

    imageNodes.forEach(image => {
      image.style.transform = `translateX(calc(${-100 * n}% - 20px))`;
    });
  };

  // Navigates images to the left when the left arrow is interacted with.
  const slideImagesLeft = () => {
    index -= 1;
    index = index < 0 ? images.length - 1 : index;

    loadImage(index);
  };

  // Used to ensure that the enter key is used to interact with an arrow.
  const handleLeftKeyUp = ({ key }) => {
    if (key === 'Enter') slideImagesLeft();
  };

  // Navigates images to the right when the right arrow is interacted with.
  const slideImagesRight = () => {
    index += 1;
    index = index > images.length - 1 ? 0 : index;

    loadImage(index);
  };

  // Used to ensure that the enter key is used to interact with an arrow.
  const handleRightKeyUp = ({ key }) => {
    if (key === 'Enter') slideImagesRight();
  };

  return images.length > 1 ? (
    <>
      <img
        tabIndex={0}
        className={styles.arrow}
        src={arrowLeftImage}
        alt="Arrow left"
        onKeyUp={event => handleLeftKeyUp(event)}
        onClick={() => slideImagesLeft()}
      />
      <Container className={styles.frame}>{displayImages()}</Container>
      <img
        tabIndex={0}
        className={styles.arrow}
        src={arrowRightImage}
        alt="Arrow right"
        onKeyUp={event => handleRightKeyUp(event)}
        onClick={() => slideImagesRight()}
      />
    </>
  ) : (
    <Container className={styles.frame}>{displayImages()}</Container>
  );
};

ProjectImages.propTypes = {
  images: PropTypes.array,
  projectName: PropTypes.string,
};

export default ProjectImages;
