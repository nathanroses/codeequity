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
      <p className={styles.desc}>Send Us Your Code</p>
    </div>
    <div className={styles.box}>
    <h2>Step 2</h2>
      <p className={styles.desc}>Intelligent Grading System Reviewed by Expert</p>
    </div>
    <div className={styles.box}>
      <h2>Step 3</h2>
      <p className={styles.desc}>Receive Your Code Evaluation</p>
    </div>
    <div className={styles.box}>
      <h2 className={styles.desc}>Step 4</h2>
      <p>Repeat</p>
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
