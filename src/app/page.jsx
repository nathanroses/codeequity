import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Evaluate</span> Digital<br />Assets
        </h1>
        
        <p className={styles.desc}>
          Code Equity is the first B2B service provider to offer precise evaluations of digital assets, 
          ensuring investors make informed decisions with confidence and maximize returns in an evolving market.
        </p>
        
        <div className={styles.statsRow}>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>98%</div>
            <div className={styles.statsLabel}>ACCURACY RATE</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>3.2K+</div>
            <div className={styles.statsLabel}>ASSETS EVALUATED</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>24hr</div>
            <div className={styles.statsLabel}>TURNAROUND</div>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <button className={styles.button}>Submit Evaluation</button>
          <button className={styles.button}>Learn More</button>
        </div>
        
        <div>
          <p className={styles.trustedText}>TRUSTED BY INDUSTRY LEADERS</p>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
          </div>
        </div>
      </div>
      
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
        <div className={styles.testimonialCard}>
          <p>
            "Code Equity's evaluations were instrumental in our latest investment round, 
            delivering insights that saved us millions."
          </p>
          <div>
            <div className={styles.testimonialName}>Sarah Chen</div>
            <div className={styles.testimonialTitle}>CTO, TechVenture Capital</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
