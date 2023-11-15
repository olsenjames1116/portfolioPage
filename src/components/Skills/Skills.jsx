import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';
import Image from '../Image/Image';

const Skills = () => {
  const { skills } = useContext(SkillsContext);

  return (
    <ul>
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
