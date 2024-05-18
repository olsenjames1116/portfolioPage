import {
  javascriptImage,
  htmlImage,
  cssImage,
  cypressImage,
  dockerImage,
  gitImage,
  reactImage,
  viteImage,
  reduxImage,
  styledComponentsImage,
  jestImage,
  mswImage,
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
  typescriptImage,
  expressImage,
  mongodbImage,
  redisImage,
  sassImage,
  jwtImage,
  pugImage,
  sqlImage,
  postgresImage,
  nestjsImage,
  bootstrapImage,
  tailwindCSSImage,
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
    { name: 'SQL', src: sqlImage },
    { name: 'CSS', src: cssImage },
    { name: 'Sass', src: sassImage },
    { name: 'Bootstrap', src: bootstrapImage },
    { name: 'TailwindCSS', src: tailwindCSSImage },
    { name: 'React', src: reactImage },
    { name: 'NodeJS', src: nodejsImage },
    { name: 'Express', src: expressImage },
    { name: 'NestJS', src: nestjsImage },
    { name: 'MongoDB', src: mongodbImage },
    { name: 'Postgres', src: postgresImage },
    { name: 'Docker', src: dockerImage },
    { name: 'Jest', src: jestImage },
    { name: 'Cypress', src: cypressImage },
    { name: 'MSW', src: mswImage },
    { name: 'Redis', src: redisImage },
    { name: 'Git', src: gitImage },
    { name: 'JWT', src: jwtImage },
    { name: 'Vite', src: viteImage },
    { name: 'Router', src: routerImage },
    { name: 'Redux', src: reduxImage },
    { name: 'Pug', src: pugImage },
    { name: 'styled-components', src: styledComponentsImage },
    { name: 'Webpack', src: webpackImage },
    { name: 'npm', src: npmImage },
    { name: 'ESLint', src: eslintImage },
    { name: 'Prettier', src: prettierImage },
    { name: 'Emmet', src: emmetImage },
    { name: 'Firebase', src: firebaseImage },
    { name: 'GitHub', src: githubImage },
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
