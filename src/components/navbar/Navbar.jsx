import Link from "next/link";
import Image from "next/image"; // Import Image component
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image
            src="/Code Equity Logo.png" // Path to your logo image in the public folder
            alt="Logo" // Alt text for the logo
            width={110} // Set the width as needed
            height={110} // Set the height as needed
          />
        </div>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
