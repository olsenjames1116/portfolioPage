import heroImage from "../../assets/images";

const Hero = () => {
    return (    
        <div>
            <img style={{width: "100vw", height: "auto"}} src={heroImage} alt=""></img>
            <h1>James Olsen</h1>
            <h1>Full Stack Web Developer</h1>
        </div>
    );
}

export default Hero;