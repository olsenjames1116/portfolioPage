import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';
import {
  whiskImages,
  flickChatImages,
  hermesImages,
  pubChairSportsImages,
  shoelaceExpressImages,
  grapevineImages,
} from '../../assets/images';
import Container from '../Container/Container';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Image from '../Image/Image';
import ProjectImages from '../ProjectImages/ProjectImages';
import styles from './Projects.module.css';

// Represents the Projects component in the Portfolio component.
const Projects = () => {
  const { skills } = useContext(SkillsContext);

  /* An array of projects that can be expanded or reduced in the future. This 
  is used to store all the information on the page to be rendered. */
  const projects = [
    {
      name: 'Whisk',
      technologies: ['TypeScript', 'React', 'Sass', 'MongoDB', 'Express'],
      summary:
        'A recipe, grocery and meal planner full-stack app and API with trying something new in mind.',
      src: whiskImages,
      sourceCode: 'https://github.com/olsenjames1116/recipeApp',
      livePreview: 'https://whisk-recipes.com/',
    },
    {
      name: 'Hermes',
      technologies: ['React', 'MongoDB', 'Express', 'Redis', 'Redux'],
      summary: 'A messenger full-stack app and API to chat with friends.',
      src: hermesImages,
      sourceCode: 'https://github.com/olsenjames1116/messagingApp',
      livePreview: 'https://hermes-auv3.onrender.com',
    },
    {
      name: 'FlickChat',
      technologies: ['React', 'Redux', 'Firebase', 'Router'],
      summary:
        "Movie blogging app for users to comment and interact on some of today's top movies.",
      src: flickChatImages,
      sourceCode: 'https://github.com/olsenjames1116/social-networking-app',
      livePreview: 'https://olsenjames1116.github.io/social-networking-app/',
    },
    {
      name: 'Pub Chair Sports',
      technologies: ['React', 'MongoDB', 'Express', 'Redux', 'JWT'],
      summary:
        "A blogging full-stack app and API to check out today's top sports stories from our writers.",
      src: pubChairSportsImages,
      sourceCode: 'https://github.com/olsenjames1116/blogAPI',
      livePreview: 'https://pubchairsports.onrender.com/',
    },
    {
      name: 'Shoelace Express',
      technologies: ['Express', 'MongoDB', 'Pug'],
      summary: 'Server-based app to create, read, update and delete inventory.',
      src: shoelaceExpressImages,
      sourceCode: 'https://github.com/olsenjames1116/inventoryApp',
      livePreview: 'https://shoelaceexpress.onrender.com/',
    },
    {
      name: 'Grapevine',
      technologies: ['Express', 'MongoDB', 'Pug'],
      summary:
        'Server-based messaging app with exclusive features for members.',
      src: grapevineImages,
      sourceCode: 'https://github.com/olsenjames1116/membersOnly',
      livePreview: 'https://grapevine-wszg.onrender.com/messages',
    },
  ];

  // Filters the skills relevant to a project to be displayed.
  const filterSkills = project => {
    let filteredSkills = [];
    for (const technology of project.technologies) {
      const temp = skills.filter(skill => skill.name === technology);
      filteredSkills.push(...temp);
    }
    return filteredSkills;
  };

  // Displays relevant skills to a project.
  const displayFilteredSkills = project => {
    const filteredSkills = filterSkills(project);

    return filteredSkills.map((skill, index) => (
      <li key={index}>
        <Image src={skill.src} />
      </li>
    ));
  };

  // Opens a new tab for the user to view a project.
  const directToLink = href => {
    window.open(href, '_blank');
  };

  return (
    <ul className={styles.projects}>
      {projects.map((project, index) => {
        return (
          <li key={index} className={project.name.split(' ').join('')}>
            <Container className={styles.infoContainer}>
              <ProjectInfo
                name={project.name}
                displayFilteredSkills={displayFilteredSkills(project)}
                summary={project.summary}
              />
              <ButtonContainer
                handleLivePreviewClick={() => directToLink(project.livePreview)}
                handleSourceCodeClick={() => directToLink(project.sourceCode)}
              />
            </Container>
            <Container className={styles.imageContainer}>
              <ProjectImages
                images={project.src}
                projectName={project.name.split(' ').join('')}
              />
            </Container>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
