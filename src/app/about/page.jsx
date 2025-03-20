import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "Learn more about Code Equity's mission and services",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.subtitle}>Our Mission</span>
        <h1 className={styles.title}>
          Illuminating Digital Value Through Evaluation 
        </h1>
        <p className={styles.desc}>
          At the forefront of digital asset valuation, we blend advanced AI with expert analysis to redefine evaluation standards. Our commitment to precision and innovation guides our journey in becoming the global leader in digital asset assessment.
        </p>
        <p className={styles.desc}>
          Founded by industry experts with decades of combined experience, Code Equity provides unparalleled insights into the true value of digital properties. We serve diverse markets with customized solutions that enable confident investment decisions.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>AI Algorithms</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Industry Partners</p>
          </div>
          <div className={styles.box}>
            <h1>1,000+</h1>
            <p>Projects Evaluated</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrapper}>
          <Image
            src="/about.png"
            alt="About Code Equity"
            fill
            className={styles.img}
          />
          <div className={styles.imgGlow}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
