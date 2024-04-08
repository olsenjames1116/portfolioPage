import PropTypes from 'prop-types';

// Used as containers throughout the page for styling purposes.
const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
