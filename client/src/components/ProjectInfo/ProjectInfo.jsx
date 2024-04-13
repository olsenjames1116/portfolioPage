import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ProjectInfo.module.css';
import Image from '../Image/Image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Represents the Project Info component in the Portfolio component.
const ProjectInfo = ({ name, project, summary }) => {
  const skills = useSelector(state => state.skills.value);

  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    for (const technology of project.technologies) {
      const temp = skills.filter(skill => skill.name === technology);
      setFilteredSkills(state => [...state, ...temp]);
    }
  }, []);

  return (
    <Container className={styles.projectInfo}>
      <h3>{name}</h3>
      <ul>
        {filteredSkills.map((skill, index) => {
          return (
            <li key={index}>
              <Image src={skill.image} />
            </li>
          );
        })}
      </ul>
      <p>{summary}</p>
    </Container>
  );
};

ProjectInfo.propTypes = {
  name: PropTypes.string,
  project: PropTypes.object,
  summary: PropTypes.string,
};

export default ProjectInfo;
