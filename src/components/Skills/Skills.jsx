import { skillsImages } from "../../assets/images";

const Skills = () => {
    return (
      <ul>
        {skillsImages.map(skill => {
          return (
            <li key={skill.name}>
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
}

export default Skills;