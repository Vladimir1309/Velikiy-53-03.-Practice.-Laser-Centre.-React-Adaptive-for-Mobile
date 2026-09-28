import Footer from "../components/Footer";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.page} id="top">
      <main className={styles.content}>
        <h1>Политика конфиденциальности</h1>
        <p>
          Страница находится в разработке. Текст политики конфиденциальности
          будет добавлен позже.
        </p>
        <a className={styles.homeLink} href="/">
          На главную
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
