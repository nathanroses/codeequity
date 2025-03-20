"use client";

import { useState, useEffect } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "System",
    path: "/system",
  },
  {
    title: "Evaluation",
    path: "/contact",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} scrolled={scrolled} />
        ))}
        
        {session?.user ? (
          <div className={styles.userSection}>
            {session.user?.img && (
              <div className={styles.avatarContainer}>
                <Image
                  src={session.user.img}
                  alt={session.user.username || "User"}
                  width={36}
                  height={36}
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userActions}>
              {session.user?.isAdmin && (
                <NavLink 
                  item={{ title: "Admin", path: "/admin" }} 
                  scrolled={scrolled}
                />
              )}
              <form action={handleLogout}>
                <button className={styles.logout}>
                  <span>Logout</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <NavLink 
            item={{ title: "Client Login", path: "/login" }} 
            scrolled={scrolled}
            highlight={true}
          />
        )}
      </div>
      
      <div className={styles.mobileControls}>
        <button 
          className={`${styles.menuButton} ${open ? styles.menuOpen : ''}`} 
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Simple non-animated mobile menu */}
      {open && (
        <div className={styles.mobileLinks}>
          <div className={styles.mobileLinksContent}>
            {links.map((link) => (
              <div key={link.title}>
                <NavLink 
                  item={link} 
                  onClick={closeMenu} 
                  mobile={true}
                />
              </div>
            ))}
            
            {session?.user ? (
              <div className={styles.mobileUserSection}>
                {session.user?.isAdmin && (
                  <NavLink 
                    item={{ title: "Admin", path: "/admin" }} 
                    onClick={closeMenu}
                    mobile={true}
                  />
                )}
                <form action={handleLogout}>
                  <button className={styles.mobileLogout}>
                    <span>Logout</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <NavLink 
                  item={{ title: "Client Login", path: "/login" }} 
                  onClick={closeMenu}
                  mobile={true}
                  highlight={true}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
