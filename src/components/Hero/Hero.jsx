import {heroImage} from "../../assets/images";

const Hero = () => {
    return (    
        <section>
            <img style={{width: "100vw", height: "auto"}} src={heroImage} alt=""></img>
            <h1>James Olsen</h1>
            <h1>Full Stack Web Developer</h1>
        </section>
    );
}

export default Hero;