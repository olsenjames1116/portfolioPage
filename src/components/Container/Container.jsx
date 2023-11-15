import PropTypes from 'prop-types';

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
