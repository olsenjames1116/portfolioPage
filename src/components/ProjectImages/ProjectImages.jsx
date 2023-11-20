import { arrowLeftImage, arrowRightImage } from '../../assets/images';
import PropTypes from 'prop-types';

const ProjectImages = ({ images }) => {
  const displayImages = () => {
    return images.map((image, index) => <img key={index} src={image} />);
  };

  return images.length > 1 ? (
    <>
      <img src={arrowLeftImage} alt="Arrow left" /> {displayImages()}
      <img src={arrowRightImage} />
    </>
  ) : (
    displayImages()
  );
};

ProjectImages.propTypes = {
  images: PropTypes.array,
};

export default ProjectImages;
