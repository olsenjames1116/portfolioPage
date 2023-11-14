import {profileImage} from "../../assets/images";

const About = () => {
    return (
        <section id="about">
            <h2>About</h2>
            <img style={{height: "200px", width: "auto"}} src={profileImage}/>
        </section>
    )
}

export default About;