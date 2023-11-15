import {
  flickChatImage,
  taskManagerImage,
  jimClassImage,
  cvBuilderImage,
} from '../../assets/images';

const Projects = () => {
  const projects = [
    {
      name: 'FlickChat',
      summary:
        "A movie blogging app that allows users to comment and interact with comments on some of today's top movies. Read what other people are saying about movies or leave some thoughts of your own. Each comment can be liked or disliked to show the approval of that comment. Each movie page also provides some basic information to keep you up to date on what everyone is watching!",
      src: flickChatImage,
    },
    { name: 'Task Manager', src: taskManagerImage },
    { name: 'Jim Class', src: jimClassImage },
    { name: 'CV Builder', src: cvBuilderImage },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <h3>{project.name}</h3>
              <p></p>
              <img
                style={{ width: '50vw', height: 'auto' }}
                src={project.src}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
