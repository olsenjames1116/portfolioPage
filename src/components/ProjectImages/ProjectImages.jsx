import { arrowLeftImage, arrowRightImage } from '../../assets/images';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ProjectImages.module.css';

export default function ProjectImages({ images, projectName }) {
  let index = 0;

  const displayImages = () => {
    return images.map((image, index) => (
      <img key={index} className={styles.projectImage} src={image} />
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

  const slideImagesRight = () => {
    index += 1;
    index = index > images.length - 1 ? 0 : index;

    loadImage(index);
  };

  return images.length > 1 ? (
    <>
      <img
        className={styles.arrow}
        src={arrowLeftImage}
        alt="Arrow left"
        onClick={() => slideImagesLeft()}
      />
      <Container className={styles.frame}>{displayImages()}</Container>
      <img
        className={styles.arrow}
        src={arrowRightImage}
        alt="Arrow right"
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
