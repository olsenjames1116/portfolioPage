import { powerImage, arrowDownImage } from '../../assets/images';
import Image from '../Image/Image';
import Container from '../Container/Container';
import styles from './Hero.module.css';
import { useState } from 'react';

// Represents the Hero component at the top of the page.
const Hero = () => {
  // Used to track state of the power button to turn power on and off to the logo.
  const [powerOn, setPowerOn] = useState(true);

  // Reached when the user interacts with the power button icon.
  const handlePower = () => {
    powerOn ? setPowerOn(false) : setPowerOn(true);
  };

  // Reached when the user presses the enter key on the power icon.
  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') handlePower();
  };

  return (
    <section className={styles.hero}>
      <Container className={styles.heroText}>
        <h1
          className={
            powerOn
              ? `${styles.name} ${styles.namePowerOn}`
              : `${styles.name} ${styles.namePowerOff}`
          }
        >
          James Olsen
        </h1>
        <img
          tabIndex={0}
          className={powerOn ? styles.powerOn : styles.powerOff}
          src={powerImage}
          alt="Power icon"
          onClick={() => handlePower()}
          onKeyUp={event => handleKeyUp(event)}
        />
        <h1 className={styles.jobTitle}>Full Stack Web Developer</h1>
      </Container>
      <Image src={arrowDownImage} />
    </section>
  );
};

export default Hero;
