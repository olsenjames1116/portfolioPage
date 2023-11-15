import PropTypes from 'prop-types';

const Image = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

Image.defaultProps = {
  alt: '',
  style: { height: '50px', width: '50px' },
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
