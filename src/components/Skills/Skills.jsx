import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';
import Image from '../Image/Image';
import styles from './Skills.module.css';

// Represents the Skills component in the About component.
const Skills = () => {
  const { skills } = useContext(SkillsContext);

  return (
    <ul className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <Image src={skill.src} />
            <span>{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
