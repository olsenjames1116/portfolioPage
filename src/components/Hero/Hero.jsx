import { heroImage, powerImage } from '../../assets/images';
import Image from '../Image/Image';
import Container from '../Container/Container';
import styles from './Hero.module.css';
import { useState } from 'react';

const Hero = () => {
  const [powerOn, setPowerOn] = useState(true);

  const handlePower = () => {
    powerOn ? setPowerOn(false) : setPowerOn(true);
  };

  return (
    <section className={styles.hero}>
      <Image src={heroImage} />
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
          className={powerOn ? styles.powerOn : styles.powerOff}
          src={powerImage}
          onClick={() => handlePower()}
        />
        <h1 className={styles.jobTitle}>Full Stack Web Developer</h1>
      </Container>
    </section>
  );
};

export default Hero;
