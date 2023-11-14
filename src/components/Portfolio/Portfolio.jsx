import { flickChatImage, taskManagerImage, jimClassImage, cvBuilderImage } from "../../assets/images";

const Projects = () => {
    const projects = [{name: "FlickChat", src: flickChatImage}, {name: "Task Manager", src: taskManagerImage}, {name: "Jim Class", src: jimClassImage}, {name: "CV Builder", src: cvBuilderImage}]

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <h3>{project.name}</h3>
                            <img style={{width: "50vw", height: "auto"}} src={project.src} alt="" />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Projects;