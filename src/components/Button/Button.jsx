import PropTypes from 'prop-types';

const Button = ({ type, handleClick, children }) => {
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
