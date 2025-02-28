import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span>Evaluate</span> Digital Assets
        </h1>
        
        <p className={styles.desc}>
          Code Equity is the first B2B service provider to offer precise evaluations of digital assets, 
          ensuring investors make informed decisions with confidence and maximize returns in an evolving market.
        </p>
        
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Accuracy Rate</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3.2K+</span>
            <span className={styles.statLabel}>Assets Evaluated</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24hr</span>
            <span className={styles.statLabel}>Turnaround</span>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <button className={styles.button}>Submit Evaluation</button>
          <button className={styles.button}>Learn More</button>
        </div>
        
        <div>
          <p className={styles.trustedByTitle}>Trusted by industry leaders</p>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="Partner brands" fill className={styles.brandImg}/>
          </div>
        </div>
      </div>
      
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="Digital asset evaluation visualization" fill className={styles.heroImg}/>
        
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            "Code Equity's evaluations were instrumental in our latest investment round, 
            delivering insights that saved us millions."
          </p>
          <div className={styles.testimonialAuthor}>
            <span className={styles.authorName}>Sarah Chen</span>
            <span className={styles.authorTitle}>CTO, TechVenture Capital</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
