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
  emmetImage,
  visualStudioCodeImage,
  netlifyImage,
  typescriptImage,
  expressImage,
  mongodbImage,
  redisImage,
  sassImage,
  jwtImage,
} from '../../assets/images';
import SkillsContext from '../../contexts/SkillsContext';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import styles from './Main.module.css';

// Represents the main content of the page.
const Main = () => {
  /* Used to represent skills throughout the page. Accessed by a context 
  provider to be passed around the page. */
  const skills = [
    { name: 'JavaScript', src: javascriptImage },
    { name: 'TypeScript', src: typescriptImage },
    { name: 'HTML', src: htmlImage },
    { name: 'CSS', src: cssImage },
    { name: 'Sass', src: sassImage },
    { name: 'React', src: reactImage },
    { name: 'NodeJS', src: nodejsImage },
    { name: 'Express', src: expressImage },
    { name: 'MongoDB', src: mongodbImage },
    { name: 'Redis', src: redisImage },
    { name: 'Git', src: gitImage },
    { name: 'JWT', src: jwtImage },
    { name: 'Vite', src: viteImage },
    { name: 'Router', src: routerImage },
    { name: 'Redux', src: reduxImage },
    { name: 'styled-components', src: styledComponentsImage },
    { name: 'Jest', src: jestImage },
    { name: 'Webpack', src: webpackImage },
    { name: 'npm', src: npmImage },
    { name: 'ESLint', src: eslintImage },
    { name: 'Prettier', src: prettierImage },
    { name: 'Emmet', src: emmetImage },
    { name: 'Firebase', src: firebaseImage },
    { name: 'GitHub', src: githubImage },
    { name: 'Netlify', src: netlifyImage },
    { name: 'Visual Studio Code', src: visualStudioCodeImage },
    { name: 'Linux', src: linuxImage },
  ];

  return (
    <main className={styles.main}>
      <SkillsContext.Provider value={{ skills }}>
        <About />
        <Portfolio />
        <Contact />
      </SkillsContext.Provider>
    </main>
  );
};

export default Main;
