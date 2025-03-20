import Image from "next/image";
import styles from "./system.module.css";

export const metadata = {
  title: "Our Evaluation System",
  description: "Discover Code Equity's revolutionary approach to digital asset evaluation",
};

const SystemPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.gradientText}>Revolutionary</span> Digital Asset Evaluation
        </h1>
        <p className={styles.heroSubtitle}>
          Discover the industry's most advanced approach to evaluating code and digital assets
        </p>
      </div>

      {/* Process Flow */}
      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>Our Evaluation Process</h2>
        
        <div className={styles.processFlow}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <div className={styles.stepIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>Submit Your Code</h3>
              <p className={styles.stepDescription}>
                Upload your digital assets through our secure platform or connect your repository for seamless integration and evaluation.
              </p>
            </div>
          </div>

          <div className={styles.processConnector}>
            <svg width="20" height="80" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0V70M10 70L2 62M10 70L18 62" stroke="url(#gradient)" strokeWidth="2"/>
              <defs>
                <linearGradient id="gradient" x1="10" y1="0" x2="10" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4d66cb" stopOpacity="0.2"/>
                  <stop offset="1" stopColor="#4d66cb"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <div className={styles.stepIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>AI-Powered Analysis</h3>
              <p className={styles.stepDescription}>
                Our proprietary AI algorithms perform deep analysis on your code, evaluating efficiency, security, scalability, and adherence to best practices.
              </p>
            </div>
          </div>

          <div className={styles.processConnector}>
            <svg width="20" height="80" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0V70M10 70L2 62M10 70L18 62" stroke="url(#gradient)" strokeWidth="2"/>
              <defs>
                <linearGradient id="gradient" x1="10" y1="0" x2="10" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4d66cb" stopOpacity="0.2"/>
                  <stop offset="1" stopColor="#4d66cb"/>
                </linearGradient>
              </defs>
            </svg>
          </div>



          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <div className={styles.stepIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>Receive Detailed Report</h3>
              <p className={styles.stepDescription}>
                Get your comprehensive evaluation report with actionable insights, value assessment, and recommendations for optimization within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className={styles.techSection}>
        <div className={styles.techContent}>
          <h2 className={styles.techTitle}>Cutting-Edge Technology</h2>
          <p className={styles.techDescription}>
            Our proprietary evaluation system combines advanced machine learning algorithms with expert human oversight to provide the most accurate and valuable digital asset assessments on the market.
          </p>
          
          <div className={styles.techFeatures}>
            <div className={styles.techFeature}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>50+ AI Algorithms</h3>
              <p>Advanced analysis covering every aspect of code quality and performance</p>
            </div>
            
            <div className={styles.techFeature}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3>98% Accuracy Rate</h3>
              <p>Industry-leading precision in evaluation and value assessment</p>
            </div>
            
            <div className={styles.techFeature}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>24-Hour Turnaround</h3>
              <p>Fast and reliable evaluation when time is critical</p>
            </div>
            
            <div className={styles.techFeature}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3>Comprehensive Reports</h3>
              <p>Detailed insights with actionable recommendations</p>
            </div>
          </div>
        </div>
        
        <div className={styles.techImageContainer}>
          <Image
            src="/system.png"
            alt="Code Equity's Advanced Technology"
            fill
            className={styles.techImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>

      {/* Testimonial */}
      <div className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <svg className={styles.quoteIcon} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 24H8V32H16V40H8C5.87827 40 3.84344 39.1571 2.34315 37.6569C0.842855 36.1566 0 34.1217 0 32V16C0 13.8783 0.842855 11.8434 2.34315 10.3431C3.84344 8.84285 5.87827 8 8 8H14.4C15.4 8 16 8.6 16 9.6V22.4C16 23.4 15.4 24 14.4 24ZM46.4 24H40V32H48V40H40C37.8783 40 35.8434 39.1571 34.3431 37.6569C32.8429 36.1566 32 34.1217 32 32V16C32 13.8783 32.8429 11.8434 34.3431 10.3431C35.8434 8.84285 37.8783 8 40 8H46.4C47.4 8 48 8.6 48 9.6V22.4C48 23.4 47.4 24 46.4 24Z" fill="#4d66cb" fillOpacity="0.2"/>
          </svg>
          <p className={styles.testimonialText}>
            Code Equity's evaluation system provided insights that were truly game-changing for our investment decisions. Their combination of AI analysis and expert review helped us identify high-value assets that others had overlooked.
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorAvatar}>
              <Image 
                src="/noavatar.png" 
                alt="Testimonial author" 
                width={60} 
                height={60} 
                className={styles.avatarImage} 
              />
            </div>
            <div className={styles.authorInfo}>
              <h4>Sarah Chen</h4>
              <p>CTO, TechVenture Capital</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2>Ready to evaluate your digital assets?</h2>
        <p>Experience the most advanced evaluation system on the market</p>
        <a href="/contact" className={styles.ctaButton}>
          Start Your Evaluation
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SystemPage;
