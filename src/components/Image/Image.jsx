import PropTypes from 'prop-types';

// Used as a custom component for some default behavior throughout the page.
const Image = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

Image.defaultProps = {
  alt: '',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
