import BackgroundBorder1 from "./BackgroundBorder1";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <BackgroundBorder1
        prop="ДЛЯ ЧАСТНЫХ ЗАКАЗОВ"
        prop1="Стартовый"
        prop2="от 500 ₽"
        text="Гравировка до 100 см²"
        featureDescription="1–2 дня исполнения"
        featureDetail="Базовые материалы"
        featureLabel="Консультация специалиста"
        featureContent="Доставка по СПб"
      />
      <div className={styles.backgroundborder}>
        <div className={styles.overlayshadow} />
        <div className={styles.margin}>
          <div className={styles.container2}>
            <div className={styles.div}>КОРПОРАТИВНЫМ КЛИЕНТАМ</div>
          </div>
        </div>
        <div className={styles.margin2}>
          <div className={styles.container2}>
            <h3 className={styles.h3}>Бизнес</h3>
          </div>
        </div>
        <div className={styles.margin3}>
          <div className={styles.container2}>
            <h2 className={styles.h2}>от 3 000 ₽</h2>
          </div>
        </div>
        <div className={styles.listmargin}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.div2}>✓</div>
              <div className={styles.text}>Серийные заказы от 50 шт.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.div2}>✓</div>
              <div className={styles.text2}>Срочное исполнение 24 ч.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.div2}>✓</div>
              <div className={styles.text3}>Любые материалы</div>
            </div>
            <div className={styles.item}>
              <div className={styles.div2}>✓</div>
              <div className={styles.text4}>Персональный менеджер</div>
            </div>
            <div className={styles.item}>
              <div className={styles.div2}>✓</div>
              <div className={styles.text5}>Доставка по РФ</div>
            </div>
          </div>
        </div>
        <a href="#callback" className={styles.button}>
          <div className={styles.text6}>Заказать сейчас</div>
        </a>
        <div className={styles.background}>
          <b className={styles.text7}>Популярный</b>
        </div>
      </div>
      <BackgroundBorder1
        prop="ДЛЯ ПРОИЗВОДСТВ"
        prop1="Промышленный"
        prop2="По запросу"
        text="Крупносерийные заказы"
        textWidth="170px"
        featureDescription="Прецизионная маркировка"
        featureDescriptionWidth="189px"
        featureDetail="Промышленные стандарты"
        featureDetailWidth="189px"
        featureLabel="Технологическое сопровождение"
        featureLabelWidth="231px"
        featureContent="SLA-договор"
        featureContentWidth="85px"
      />
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
