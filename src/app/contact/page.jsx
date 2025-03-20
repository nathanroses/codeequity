"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      setFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Submit Your Digital Asset</h1>
        <p className={styles.subtitle}>Upload your files for professional evaluation</p>
        
        <div 
          className={`${styles.dropzone} ${dragActive ? styles.active : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            multiple 
            className={styles.fileInput} 
            ref={inputRef}
            onChange={handleFileChange}
          />
          
          <div className={styles.dropzoneContent}>
            <div className={styles.uploadIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Drag and drop your files here</h3>
            <p>or</p>
            <button 
              type="button" 
              className={styles.browseButton}
              onClick={() => inputRef.current.click()}
            >
              Browse Files
            </button>
            <p className={styles.fileNote}>Upload your code, projects, or any digital assets for evaluation</p>
          </div>
        </div>
        
        {files.length > 0 && (
          <div className={styles.fileList}>
            <h3>Uploaded Files ({files.length})</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index} className={styles.fileItem}>
                  <div className={styles.fileDetails}>
                    <svg className={styles.fileIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <span className={styles.fileName}>{file.name}</span>
                      <span className={styles.fileSize}>{formatFileSize(file.size)}</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => removeFile(index)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email address" required />
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your project" rows="4"></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Submit for Evaluation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
