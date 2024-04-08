import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';
import {
  whiskImages,
  flickChatImages,
  taskManagerImages,
  jimClassImages,
  hermesImages,
  pubChairSportsImages,
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
        'A full service recipe and grocery app for trying something new! Generate a random recipe or a recipe using ingredients you already have in your pantry. Store ingredients you have in your pantry to help search for recipes and build a grocery list. Use your stored recipes to plan out your meals for the week. All of that can be done with the help of Whisk!',
      src: whiskImages,
      sourceCode: 'https://github.com/olsenjames1116/recipeApp',
      livePreview: 'https://whisk.onrender.com',
    },
    {
      name: 'Hermes',
      technologies: ['React', 'MongoDB', 'Express', 'Redis', 'Redux'],
      summary:
        'A messaging app to chat back and forth with friends. Sign up for an account, chat and edit your profile as you see fit.',
      src: hermesImages,
      sourceCode: 'https://github.com/olsenjames1116/messagingApp',
      livePreview: 'https://hermes-auv3.onrender.com',
    },
    {
      name: 'FlickChat',
      technologies: ['React', 'Redux', 'Firebase', 'Router'],
      summary:
        "A movie blogging app that allows users to comment and interact with comments on some of today's top movies. Read what other people are saying about movies or leave some thoughts of your own. Each comment can be liked or disliked to show the approval of that comment. Each movie page also provides some basic information to keep you up to date on what everyone is watching!",
      src: flickChatImages,
      sourceCode: 'https://github.com/olsenjames1116/social-networking-app',
      livePreview: 'https://olsenjames1116.github.io/social-networking-app/',
    },
    {
      name: 'Pub Chair Sports',
      technologies: ['React', 'MongoDB', 'Express', 'Redux', 'JWT'],
      summary:
        "This app provides you with the latest news on what's happening in the sports world from our bloggers. Sign up for an account, leave comments and view more detail on stories from this blogging app.",
      src: pubChairSportsImages,
      sourceCode: 'https://github.com/olsenjames1116/blogAPI',
      livePreview: 'https://pubchairsports.onrender.com/',
    },
    {
      name: 'Task Manager',
      technologies: ['Webpack', 'npm'],
      summary:
        "Ever have that feeling that you're forgetting something? You're not alone! Meet the Task Manager app. Add tasks with a title, description, due date and priority. Edit existing tasks as their priority or due dates change. Create folders to organize tasks. Finally, use the sidebar to navigate to pre-existing folders that organize tasks by due dates and importance. All of this is stored on your local machine so you can keep track of your responsibilities. You'll never forget the kid at school again!",
      src: taskManagerImages,
      sourceCode: 'https://github.com/olsenjames1116/todoList',
      livePreview: 'https://olsenjames1116.github.io/todoList/',
    },
    {
      name: 'Jim Class',
      technologies: ['React', 'Router'],
      summary:
        "A mock gym equipment store. This app allows you to browse the shop, view full-size items on their own pages, add items to the cart and checkout. Time to get to work on those New Year's resolutions you've been putting off.",
      src: jimClassImages,
      sourceCode: 'https://github.com/olsenjames1116/shopping-cart',
      livePreview: 'https://olsenjames1116.github.io/shopping-cart/',
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
