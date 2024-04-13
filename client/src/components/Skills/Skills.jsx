import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from '../Image/Image';
import styles from './Skills.module.css';
import api from '../../axiosConfig';
import { addSkills } from '../../redux/state/skillsSlice';

// Represents the Skills component in the About component.
const Skills = () => {
  const skills = useSelector(state => state.skills.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await api.get('/skills');

        dispatch(addSkills(response.data.skills));
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
