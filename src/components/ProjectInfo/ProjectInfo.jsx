import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ProjectInfo.module.css';

const ProjectInfo = ({ name, displayFilteredSkills, summary }) => {
  return (
    <Container className={styles.projectInfo}>
      <h3>{name}</h3>
      <ul>{displayFilteredSkills}</ul>
      <p>{summary}</p>
    </Container>
  );
};

ProjectInfo.propTypes = {
  name: PropTypes.string,
  displayFilteredSkills: PropTypes.array,
  summary: PropTypes.string,
};

export default ProjectInfo;
