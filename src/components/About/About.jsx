import { skillsImages } from "../../assets/images";
import Bio from "../Bio/Bio";

const About = () => {
    return (
      <section id="about">
        <Bio />
        <ul>
          {skillsImages.map((skill) => {
            return (
              <li key={skill.name}>
                <img style={{height: "50px", width: "auto"}} src={skill.src} alt="" />
                <span>{skill.name}</span>
              </li>
            )
          })}
        </ul>
      </section>
    );
}

export default About;