const ProjectImages = ({ images }) => {
  return images.map((image, index) => <img key={index} src={image} />);
};

export default ProjectImages;
