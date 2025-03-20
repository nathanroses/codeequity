"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Reset loading state when we get a response
  useEffect(() => {
    if (state) {
      setIsLoading(false);
    }
  }, [state]);

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
      
      <h1 className={styles.title}>Welcome Back</h1>
      <p className={styles.subtitle}>Sign in to continue to Code Equity</p>
      
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
              placeholder="Enter your username" 
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
              placeholder="Enter your password" 
              required 
              className={styles.input} 
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
        
        <div className={styles.forgotPassword}>
          <Link href="#">Forgot password?</Link>
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
              Signing In...
            </>
          ) : (
            <>Sign In</>
          )}
        </button>
      </form>
      
      <div className={styles.registerLink}>
        <p>Don't have an account? <Link href="/register">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
