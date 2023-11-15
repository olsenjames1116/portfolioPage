import {
  javascriptImage,
  htmlImage,
  cssImage,
  gitImage,
  reactImage,
  viteImage,
  reduxImage,
  styledComponentsImage,
  jestImage,
  nodejsImage,
  webpackImage,
  npmImage,
  eslintImage,
  prettierImage,
  firebaseImage,
  githubImage,
  linuxImage,
  routerImage,
} from '../../assets/images';
import SkillsContext from '../../contexts/SkillsContext';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Main = () => {
  const skills = [
    { name: 'JavaScript', src: javascriptImage },
    { name: 'HTML', src: htmlImage },
    { name: 'CSS', src: cssImage },
    { name: 'Git', src: gitImage },
    { name: 'React', src: reactImage },
    { name: 'Vite', src: viteImage },
    { name: 'Router', src: routerImage },
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
    <main>
      <SkillsContext.Provider value={{ skills }}>
        <About />
        <Portfolio />
        <Contact />
      </SkillsContext.Provider>
    </main>
  );
};

export default Main;
