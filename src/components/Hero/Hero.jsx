import { powerImage, arrowDownImage } from '../../assets/images';
import Image from '../Image/Image';
import Container from '../Container/Container';
import styles from './Hero.module.css';
import { useState } from 'react';

const Hero = () => {
  const [powerOn, setPowerOn] = useState(true);

  const handlePower = () => {
    powerOn ? setPowerOn(false) : setPowerOn(true);
  };

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
