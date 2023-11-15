import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';

const Skills = () => {
  const { skills } = useContext(SkillsContext);

  return (
    <ul>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <img
              style={{ height: '50px', width: 'auto' }}
              src={skill.src}
              alt=""
            />
            <span>{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
