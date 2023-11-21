import PropTypes from 'prop-types';

// Used as a custom component for desired behavior throughout the page.
const Link = ({ href, children, target }) => {
  return (
    <>
      {target ? (
        <a href={href} target={target}>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )}
    </>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  target: PropTypes.string,
};

export default Link;
