import Image from "next/image";
import styles from "./system.module.css";

export const metadata = {
  title: "System",
  description: "Learn more about Code Equity's mission and services",
};

const SystemPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
  <h1 className={styles.title}>
    How Code Equity's System Works
  </h1>
  <p className={styles.desc}>
    Discover the seamless journey of digital asset evaluation at Code Equity. Our unique blend of AI-driven analysis and expert human evaluation ensures comprehensive and reliable grading of your code.
  </p>
  <div className={styles.boxes}>
    <div className={styles.box}>
      <h2>Step 1</h2>
      <p>Send Us Your Code</p>
      <p className={styles.stepDesc}>
        Begin by submitting your code to us. Our system is designed for ease of use, ensuring a smooth start to your evaluation journey.
      </p>
    </div>
    <div className={styles.box}>
      <h2>Step 2</h2>
      <p>Intelligent Grading and Expert Review</p>
      <p className={styles.stepDesc}>
        Our Code Equity Intelligence Grading System, along with our Board of AI Directors and real code experts, meticulously analyze your code, ensuring a balanced evaluation by both AI and human expertise.
      </p>
    </div>
    <div className={styles.box}>
      <h2>Step 3</h2>
      <p>Receive Your Code Evaluation</p>
      <p className={styles.stepDesc}>
        You receive a comprehensive grade, alongside valuable insights and tips for maintaining and enhancing your code’s longevity and performance over time.
      </p>
    </div>
  </div>
</div>
      <div className={styles.imgContainer}>
        <Image
          src="/system.png"
          alt="About Code Equity"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default SystemPage;
