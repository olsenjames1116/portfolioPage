import { arrowLeftImage, arrowRightImage } from '../../assets/images';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ProjectImages.module.css';

export default function ProjectImages({ images, projectName }) {
  let index = 0;

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

  const loadImage = n => {
    const imageNodes = document.querySelectorAll(
      `li.${projectName} img.${styles.projectImage}`,
    );

    imageNodes.forEach(image => {
      image.style.transform = `translateX(calc(${-100 * n}% - 20px))`;
    });
  };

  const slideImagesLeft = () => {
    index -= 1;
    index = index < 0 ? images.length - 1 : index;

    loadImage(index);
  };

  const handleLeftKeyUp = ({ key }) => {
    if (key === 'Enter') slideImagesLeft();
  };

  const slideImagesRight = () => {
    index += 1;
    index = index > images.length - 1 ? 0 : index;

    loadImage(index);
  };

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
}

ProjectImages.propTypes = {
  images: PropTypes.array,
  projectName: PropTypes.string,
};
