import { useState } from "react";
import BackgroundBorder2 from "./BackgroundBorder2";
import PropTypes from "prop-types";
import styles from "./Section1.module.css";

const Section1 = ({ className = "", id }) => {
  const [backgroundBorder2Items] = useState([
    {
      backgroundBorderGridColumn: "1",
      backgroundBorderGridRow: "1",
      prop: "🎓",
      prop1: "Учёные степени",
      phD: "Кандидаты наук и PhD в команде",
    },
    {
      backgroundBorderGridColumn: "2",
      backgroundBorderGridRow: "1",
      prop: "🏭",
      prop1: "Станки РФ",
      phD: "Отечественное оборудование, ±0,05 мм",
    },
    {
      backgroundBorderGridColumn: "1",
      backgroundBorderGridRow: "2",
      prop: "📍",
      prop1: "Работаем по РФ",
      phD: "Офис в СПб, доставка по России",
    },
    {
      backgroundBorderGridColumn: "2",
      backgroundBorderGridRow: "2",
      prop: "⚡",
      prop1: "Срочные заказы",
      phD: "Исполнение от 2 часов",
    },
  ]);
  return (
    <section id={id} className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <section className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.div}>О КОМПАНИИ</div>
          </div>
          <div className={styles.heading2}>
            <h1 className={styles.h1}>
              20 лет лазерного мастерства
              <br />в Санкт-Петербурге
            </h1>
          </div>
          <div className={styles.container4}>
            <div className={styles.div2}>
              «Лазерный Центр» основан в Санкт-Петербурге в 2006 году. За 20 лет
              работы мы стали
              <br />
              одним из ведущих центров высокоточной лазерной гравировки и резки
              в России.
              <br />
              Обслуживаем частных лиц, малый бизнес и крупные промышленные
              предприятия.
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.strong}>
              <div className={styles.textParent}>
                <div
                  className={styles.text}
                >{`В нашей команде работают исключительно `}</div>
                <b className={styles.detailLabel}>
                  кандидаты наук и дипломированные
                </b>
              </div>
              <div className={styles.textGroup}>
                <b className={styles.text2}>специалисты</b>
                <div className={styles.textWrapper}>
                  <div className={styles.text3}>
                    {" "}
                    с профильным образованием и многолетним практическим стажем.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text4}>
              Каждый заказ — это научный подход и промышленное качество.
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.div2}>
              <span className={styles.span}>{`Работаем на `}</span>
              <b className={styles.span}>станках российского производства</b>
              <span className={styles.span}>
                {" "}
                — современное отечественное
                <br />
                оборудование с точностью позиционирования ±0,05 мм. Полная
                независимость от
                <br />
                зарубежных поставок, гарантированный сервис и запасные части на
                складе.
              </span>
            </div>
          </div>
          <div className={styles.container7}>
            <a href="#callback" className={styles.button}>
              <div className={styles.buttonLabel}>Получить консультацию</div>
            </a>
            <a href="#contacts" className={styles.button2}>
              <div className={styles.buttonLabel}>Наши контакты</div>
            </a>
          </div>
        </section>
        <section className={styles.container8}>
          {backgroundBorder2Items.map((item, index) => (
            <BackgroundBorder2
              key={index}
              backgroundBorderGridColumn={item.backgroundBorderGridColumn}
              backgroundBorderGridRow={item.backgroundBorderGridRow}
              prop={item.prop}
              prop1={item.prop1}
              phD={item.phD}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section1;
