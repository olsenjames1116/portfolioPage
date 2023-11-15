import { useContext } from 'react';
import SkillsContext from '../../contexts/SkillsContext';
import {
  flickChatImage,
  taskManagerImage,
  jimClassImage,
  cvBuilderImage,
} from '../../assets/images';

const Projects = () => {
  const { skills } = useContext(SkillsContext);

  const projects = [
    {
      name: 'FlickChat',
      technologies: ['React', 'Redux', 'Firebase', 'Router'],
      summary:
        "A movie blogging app that allows users to comment and interact with comments on some of today's top movies. Read what other people are saying about movies or leave some thoughts of your own. Each comment can be liked or disliked to show the approval of that comment. Each movie page also provides some basic information to keep you up to date on what everyone is watching!",
      src: flickChatImage,
      sourceCode: 'https://github.com/olsenjames1116/social-networking-app',
      livePreview: 'https://olsenjames1116.github.io/social-networking-app/',
    },
    {
      name: 'Task Manager',
      technologies: ['Webpack', 'npm'],
      summary:
        "Ever have that feeling that you're forgetting something? You're not alone! Meet the Task Manager app. Add tasks with a title, description, due date and priority. Edit existing tasks as their priority or due dates change. Create folders to organize tasks. Finally, use the sidebar to navigate to pre-existing folders that organize tasks by due dates and importance. All of this is stored on your local machine so you can keep track of your responsibilities. You'll never forget the kid at school again!",
      src: taskManagerImage,
      sourceCode: 'https://github.com/olsenjames1116/todoList',
      livePreview: 'https://olsenjames1116.github.io/todoList/',
    },
    {
      name: 'Jim Class',
      technologies: ['React', 'Router'],
      summary:
        "A mock gym equipment store. This app allows you to browse the shop, view full-size items on their own pages, add items to the cart and checkout. Time to get to work on those New Year's resolutions you've been putting off.",
      src: jimClassImage,
      sourceCode: 'https://github.com/olsenjames1116/shopping-cart',
      livePreview: 'https://olsenjames1116.github.io/shopping-cart/',
    },
    {
      name: 'CV Builder',
      technologies: ['React'],
      summary:
        "Move out of your Mom's basement today! Dynamically create and edit your CV with this convenient app! Create new entries and edit/delete existing ones to build out your resume. All changes can be viewed on the document as they are made to give a preview of the final product.",
      src: cvBuilderImage,
      sourceCode: 'https://github.com/olsenjames1116/cv-application',
      livePreview: 'https://olsenjames1116.github.io/cv-application/',
    },
  ];

  const filterSkills = project => {
    let filteredSkills = [];
    for (const technology of project.technologies) {
      const temp = skills.filter(skill => skill.name === technology);
      filteredSkills.push(...temp);
    }
    return filteredSkills;
  };

  const displayFilteredSkills = project => {
    const filteredSkills = filterSkills(project);

    return filteredSkills.map((skill, index) => (
      <li key={index}>
        <img style={{ height: '50px', width: 'auto' }} src={skill.src} />
      </li>
    ));
  };

  const directToLink = href => {
    window.open(href, '_blank');
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <h3>{project.name}</h3>
              <ul>{displayFilteredSkills(project)}</ul>
              <p>{project.summary}</p>
              <img
                style={{ width: '50vw', height: 'auto' }}
                src={project.src}
                alt=""
              />
              <div>
                <button
                  type="button"
                  onClick={() => directToLink(project.livePreview)}
                >
                  Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => directToLink(project.sourceCode)}
                >
                  Source Code
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
