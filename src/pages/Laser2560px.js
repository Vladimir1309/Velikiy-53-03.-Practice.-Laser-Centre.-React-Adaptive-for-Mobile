import { useState } from "react";
import Header from "../components/Header";
import Container1 from "../components/Container1";
import OverlayHorizontalBorder from "../components/OverlayHorizontalBorder";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Background1 from "../components/Background1";
import Background2 from "../components/Background2";
import FrameComponent from "../components/FrameComponent";
import Container from "../components/Container";
import Background from "../components/Background";
import ContentArea from "../components/ContentArea";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import styles from "./Laser2560px.module.css";

const Laser2560px = () => {
  const [submissionNotice, setSubmissionNotice] = useState("");

  return (
    <div className={styles.laser2560px} id="top">
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.text}>
              Санкт-Петербург | Москва | тел. 8-800-5555-820
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.container2}>
              <div className={styles.text}>🇷🇺</div>
            </div>
            <div className={styles.text}>Русский</div>
          </div>
        </div>
      </div>
      <Header />
      <section className={styles.section}>
        <img className={styles.imageIcon} alt="" src="./Hero.png" />
        <div className={styles.container6}>
          <Container1 />
          <div className={styles.container7}>
            <img
              className={styles.containerIcon}
              loading="eager"
              fetchPriority="high"
              alt=""
              src="./hero-machine.png"
            />
          </div>
        </div>
        <OverlayHorizontalBorder />
      </section>
      <Section1 id="about" />
      <main className={styles.sectionParent} id="services">
        <Section />
        <Background1 />
      </main>
      <Background2 />
      <FrameComponent />
      <section className={styles.background2} id="prices">
        <div className={styles.container8}>
          <div className={styles.container9}>
            <div className={styles.container10}>
              <h2 className={styles.heading2}>Цены на услуги</h2>
              <div className={styles.background3} />
            </div>
            <div className={styles.container11}>
              <div className={styles.text3}>
                Точная стоимость рассчитывается
                <br />
                индивидуально. Оставьте заявку — ответим в<br />
                течение 1 часа.
              </div>
            </div>
          </div>
          <Container />
          <Background />
        </div>
      </section>
      <ContentArea id="reviews" />
      <section className={styles.background4} id="callback">
        <div className={styles.container12}>
          <div className={styles.container13}>
            <div className={styles.formInput}>📞</div>
            <div className={styles.container14}>
              <div className={styles.heading22}>
                <h3 className={styles.companyLabel}>
                  Закажите обратный звонок
                </h3>
              </div>
              <div className={styles.container15}>
                <div className={styles.text3}>
                  для подбора оборудования с учетом всех ваших потребностей
                </div>
              </div>
            </div>
          </div>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmissionNotice(
                "Демо-режим: заявка не отправлена. Для отправки подключите сервис обработки формы.",
              );
            }}
          >
            <div className={styles.input}>
              <div className={styles.container16}>
                <input
                  className={styles.inputField}
                  name="name"
                  placeholder="Ваше имя *"
                  autoComplete="name"
                  required
                />
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.container16}>
                <input
                  className={styles.inputField}
                  name="company"
                  placeholder="Компания"
                />
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.container16}>
                <input
                  className={styles.inputField}
                  name="phone"
                  type="tel"
                  placeholder="Телефон *"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              <b className={styles.text5}>Заказать звонок</b>
            </button>
          </form>
          <div className={styles.container19}>
            <div className={styles.div4}>
              * Нажимая кнопку «Заказать звонок», Вы соглашаетесь на обработку
              своих персональных данных
            </div>
            {submissionNotice && (
              <p className={styles.formStatus} role="status">
              {submissionNotice}
              </p>
            )}
          </div>
        </div>
      </section>
      <FrameComponent1 id="contacts" />
      <Footer />
    </div>
  );
};

export default Laser2560px;
