import { javascriptImage, htmlImage, cssImage, gitImage, reactImage, viteImage, reduxImage, 
styledComponentsImage, jestImage, nodejsImage, webpackImage, npmImage, eslintImage, prettierImage, 
firebaseImage, githubImage, linuxImage } from "../../assets/images";

const Skills = () => {
  const skillsImages = [
    { name: 'JavaScript', src: javascriptImage },
    { name: 'HTML', src: htmlImage },
    { name: 'CSS', src: cssImage },
    { name: 'Git', src: gitImage },
    { name: 'React', src: reactImage },
    { name: 'Vite', src: viteImage },
    { name: 'Redux', src: reduxImage },
    { name: 'styled-components', src: styledComponentsImage },
    { name: 'Jest', src: jestImage },
    { name: 'NodeJS', src: nodejsImage },
    { name: 'Webpack', src: webpackImage },
    { name: 'npm', src: npmImage },
    { name: 'ESLint', src: eslintImage },
    { name: 'Prettier', src: prettierImage },
    { name: 'Firebase', src: firebaseImage },
    { name: 'GitHub', src: githubImage },
    { name: 'Linux', src: linuxImage },
  ];

    return (
      <ul>
        {skillsImages.map((skill, index) => {
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
}

export default Skills;