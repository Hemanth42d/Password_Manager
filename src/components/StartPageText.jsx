import styles from "./StartPageText.module.css";

const StartPageText = () => {
  return (
    <>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          A place where you can store your passwords.
        </p>
      </div>
    </>
  );
};

export default StartPageText;
