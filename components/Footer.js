import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Avani Vaidya. All rights reserved.
        </p>
      </footer>
    </>
  );
}
