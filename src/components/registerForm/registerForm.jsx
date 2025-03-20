"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordHint, setPasswordHint] = useState("");
  
  const router = useRouter();

  const checkPasswordStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
    
    if (password === "") {
      setPasswordHint("");
    } else if (strength < 2) {
      setPasswordHint("Weak password");
    } else if (strength < 4) {
      setPasswordHint("Moderate password");
    } else {
      setPasswordHint("Strong password");
    }
  };

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
    if (state) {
      setIsLoading(false);
    }
  }, [state, router]);

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoWrapper}>
        <Image
          src="/Code Equity Logo.png"
          alt="Code Equity Logo"
          width={80}
          height={80}
          className={styles.logo}
        />
      </div>
      
      <h1 className={styles.title}>Create Account</h1>
      <p className={styles.subtitle}>Join Code Equity's evaluation platform</p>
      
      <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <div className={styles.inputWrapper}>
            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input 
              id="username"
              type="text" 
              name="username" 
              placeholder="Choose a username" 
              required 
              className={styles.input} 
            />
          </div>
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <div className={styles.inputWrapper}>
            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              className={styles.input} 
            />
          </div>
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <div className={styles.inputWrapper}>
            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input 
              id="password"
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Create a password" 
              required 
              className={styles.input}
              onChange={(e) => checkPasswordStrength(e.target.value)}
            />
            <button 
              type="button" 
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
          {passwordHint && (
            <div className={`${styles.passwordStrength} ${
              passwordStrength < 2 ? styles.weak : 
              passwordStrength < 4 ? styles.moderate : 
              styles.strong
            }`}>
              <div className={styles.strengthBars}>
                <span className={passwordStrength >= 1 ? styles.active : ''}></span>
                <span className={passwordStrength >= 2 ? styles.active : ''}></span>
                <span className={passwordStrength >= 3 ? styles.active : ''}></span>
                <span className={passwordStrength >= 4 ? styles.active : ''}></span>
              </div>
              <span className={styles.strengthText}>{passwordHint}</span>
            </div>
          )}
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="passwordRepeat" className={styles.label}>Confirm Password</label>
          <div className={styles.inputWrapper}>
            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input 
              id="passwordRepeat"
              type={showPasswordRepeat ? "text" : "password"} 
              name="passwordRepeat" 
              placeholder="Confirm your password" 
              required 
              className={styles.input} 
            />
            <button 
              type="button" 
              className={styles.passwordToggle}
              onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
            >
              {showPasswordRepeat ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {state?.error && (
          <div className={styles.errorMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {state.error}
          </div>
        )}
        
        <div className={styles.termsContainer}>
          <label className={styles.termsLabel}>
            <input type="checkbox" required className={styles.termsCheckbox} />
            <span className={styles.checkmark}></span>
            I agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>
          </label>
        </div>
        
        <button 
          type="submit" 
          className={`${styles.button} ${isLoading ? styles.loading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinnerContainer}>
                <span className={styles.spinner}></span>
              </span>
              Creating Account...
            </>
          ) : (
            <>Create Account</>
          )}
        </button>
      </form>
      
      <div className={styles.loginLink}>
        <p>Already have an account? <Link href="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default RegisterForm;
