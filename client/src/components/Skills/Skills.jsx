import { useEffect, useState } from 'react';
// import SkillsContext from '../../contexts/SkillsContext';
import Image from '../Image/Image';
import styles from './Skills.module.css';
import api from '../../axiosConfig';

// Represents the Skills component in the About component.
const Skills = () => {
  // const { skills } = useContext(SkillsContext);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await api.get('/skills');

        setSkills(response.data.skills);
      } catch (error) {
        console.log(error);
      }
    };

    getSkills();
  }, []);

  return (
    <ul className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <Image src={skill.image} />
            <span>{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
