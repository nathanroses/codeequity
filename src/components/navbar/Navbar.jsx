// This remains a Server Component (no "use client" directive)
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import ClientLinks from "./links/ClientLinks"; // We'll rename the client component

const Navbar = async () => {
  // This can only run on the server
  const session = await auth();

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <Image
              src="/Code Equity Logo.png"
              alt="Code Equity Logo"
              width={110}
              height={110}
              className={styles.logoImage}
            />
          </div>
        </Link>
        
        <ClientLinks session={session} />
      </div>
    </div>
  );
};

export default Navbar;
