import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formCard}>
          <form action={handleGithubLogin} className={styles.githubForm}>
            <button className={styles.github}>Login with Github</button>
          </form>
          
          <div className={styles.divider}>
            <span>OR</span>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
