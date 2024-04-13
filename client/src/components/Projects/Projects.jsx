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
import ProjectImages from '../ProjectImages/ProjectImages';
import styles from './Projects.module.css';

// Represents the Projects component in the Portfolio component.
const Projects = () => {
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
      livePreview: 'https://whisk-recipes.com/',
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
      name: 'Shoelace Express',
      technologies: ['Express', 'MongoDB', 'Pug'],
      summary:
        'Keep track of all your inventory with this inventory tracking app. Create, read, update and delete items and categories from the database to keep your stock organized and up to date. This project uses shoes to show off its functionality but has the ability to work with any sort of data the user wishes.',
      src: shoelaceExpressImages,
      sourceCode: 'https://github.com/olsenjames1116/inventoryApp',
      livePreview: 'https://shoelaceexpress.onrender.com/',
    },
    {
      name: 'Grapevine',
      technologies: ['Express', 'MongoDB', 'Pug'],
      summary:
        "An exclusive club for people who want to say what's on their mind. While anyone with an account can post a message on the home page, only members can view who posted it and when. Join the club with a code word to view who posted a message and on what date. Admins can delete posts but users can only be made an admin through another code word.",
      src: grapevineImages,
      sourceCode: 'https://github.com/olsenjames1116/membersOnly',
      livePreview: 'https://grapevine-wszg.onrender.com/messages',
    },
  ];

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
                project={project}
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
