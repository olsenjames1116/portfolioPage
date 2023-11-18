import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './Subheading.module.css';
import { useEffect, useRef } from 'react';

const Subheading = ({ headingText }) => {
  const headingRef = useRef(null);

  const addObserver = (element, options = {}) => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(element, options);
  };

  useEffect(() => {
    addObserver(headingRef.current, { rootMargin: '-200px' });
  }, []);

  return (
    <Container className={styles.subheading}>
      <hr />
      <h2 ref={headingRef}>{headingText}</h2>
      <hr />
    </Container>
  );
};

Subheading.propTypes = {
  headingText: PropTypes.string,
};

export default Subheading;
