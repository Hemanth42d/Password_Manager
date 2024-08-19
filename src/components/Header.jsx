import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className={styles.header}>
        <p className={styles.appName}>Password Manager</p>
      </div>
    </div>
  );
};

export default Header;
