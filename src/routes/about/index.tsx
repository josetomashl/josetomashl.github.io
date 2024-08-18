import Title from "@/components/Title";
import styles from "./index.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.aboutMeContainer}>
        <Title content="About Me" />
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
    </div>
  );
}
