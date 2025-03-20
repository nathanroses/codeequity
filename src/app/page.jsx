import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
  const textContainerRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for elements as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements for animation
    if (textContainerRef.current) observer.observe(textContainerRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => {
      if (textContainerRef.current) observer.unobserve(textContainerRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer} ref={textContainerRef}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Evaluate</span>
            <span className={styles.titleUnderline}></span>
          </h1>
          <h1 className={styles.title}>Digital Assets</h1>
        </div>
        
        <p className={styles.desc}>
          Code Equity is the first B2B service provider to offer precise evaluations 
          of digital assets, ensuring investors make informed decisions with confidence 
          and maximize returns in an evolving market.
        </p>
        
        <div className={styles.statsRow} ref={statsRef}>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>98<span className={styles.statsPercent}>%</span></div>
            <div className={styles.statsLabel}>ACCURACY RATE</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>3.2<span className={styles.statsUnit}>K+</span></div>
            <div className={styles.statsLabel}>ASSETS EVALUATED</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>24<span className={styles.statsUnit}>hr</span></div>
            <div className={styles.statsLabel}>TURNAROUND</div>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <Link href="/contact" className={`${styles.button} ${styles.primaryButton}`}>
            Submit Evaluation
            <span className={styles.buttonArrow}>→</span>
          </Link>
          <Link href="/system" className={`${styles.button} ${styles.secondaryButton}`}>
            Learn More
          </Link>
        </div>
        
        <div className={styles.brandsSection}>
          <p className={styles.trustedText}>TRUSTED BY INDUSTRY LEADERS</p>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="Trusted brands" fill className={styles.brandImg}/>
          </div>
        </div>
      </div>
      
      <div className={styles.imgContainer}>
        <div className={styles.heroImgWrapper}>
          <Image src="/hero.gif" alt="Digital asset evaluation" fill className={styles.heroImg}/>
          <div className={styles.glowEffect}></div>
        </div>
        
        <div className={styles.testimonialCard} ref={testimonialRef}>
          <div className={styles.testimonialQuote}>
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.356 0.599974C5.99997 5.79997 0.199966 14.4 0.199966 22.8C0.199966 26.4 2.99997 27.9999 5.99997 27.9999C9.19997 27.9999 11.756 25.2 11.756 21.8C11.756 18.6 9.19997 15.9999 5.99997 15.9999C5.19997 15.9999 4.59997 16.2 3.99997 16.4C5.19997 10.8 10.756 4.99997 13.356 3.19997L13.356 0.599974ZM30.956 0.599974C23.756 5.79997 17.956 14.4 17.956 22.8C17.956 26.4 20.756 28 23.756 28C26.956 28 29.356 25.2 29.356 21.8C29.356 18.6 26.956 15.9999 23.756 15.9999C22.956 15.9999 22.356 16.2 21.756 16.4C22.956 10.8 28.356 4.99997 30.956 3.19997V0.599974Z" fill="#4961DD"/>
            </svg>
            <p>
              Code Equity's evaluations were instrumental in our latest investment round, 
              delivering insights that saved us millions.
            </p>
          </div>
          <div className={styles.testimonialAuthor}>
            <div className={styles.testimonialAvatar}>
              <Image src="/avatar.png" alt="Sarah Chen" width={48} height={48} className={styles.avatarImg} />
            </div>
            <div>
              <div className={styles.testimonialName}>Sarah Chen</div>
              <div className={styles.testimonialTitle}>CTO, TechVenture Capital</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
