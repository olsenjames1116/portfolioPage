import PropTypes from 'prop-types';

const Link = ({ href, children }) => {
    return (
        <a href={href}>{children}</a>
    )
}

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
}

export default Link;