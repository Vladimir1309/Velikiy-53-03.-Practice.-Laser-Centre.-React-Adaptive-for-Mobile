import { useState } from "react";
import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import styles from "./ContentArea.module.css";

const ContentArea = ({ className = "", id }) => {
  const [backgroundBorderItems] = useState([
    {
      backgroundBorderPadding: "24px 24px 46.8px",
      backgroundBorderGridColumn: "1",
      backgroundBorderGridRow: "1",
      containerPadding: "0px 0px 5.7px",
      prop: "«Заказывали корпоративные таблички и бейджи для 200 сотрудников. Всё\nсделали точно в срок, качество отличное. Работаем уже 3 года.»",
      prop1: "Алексей Морозов",
      prop2: "Директор ООО «СтройГрупп»",
    },
    {
      backgroundBorderPadding: "22px 24px",
      backgroundBorderGridColumn: "2",
      backgroundBorderGridRow: "1",
      containerPadding: "0px 0px 5.2px",
      prop: "«Гравировка обручальных колец получилась идеальной. Мастера\nпроконсультировали по шрифту, предложили красивое оформление. Очень\nдовольна!»",
      prop1: "Елена Соколова",
      prop2: "Частный клиент",
    },
    {
      backgroundBorderPadding: "24px",
      backgroundBorderGridColumn: "1",
      backgroundBorderGridRow: "2",
      containerPadding: "0px 0px 5.7px",
      prop: "«Регулярно заказываю партии сувенирной продукции. Цены адекватные,\nкачество стабильно высокое, сотрудники — настоящие профессионалы.»",
      prop1: "Игорь Павлов",
      prop2: "ИП, сувенирная мастерская",
    },
    {
      backgroundBorderPadding: "24px",
      backgroundBorderGridColumn: "2",
      backgroundBorderGridRow: "2",
      containerPadding: "0px 0px 5.7px",
      prop: "«Срочный заказ на 500 медалей выполнили за 18 часов. Это просто невероятно.\nТеперь только к вам!»",
      prop1: "Татьяна Куликова",
      prop2: "Event-агентство «Праздник»",
    },
  ]);
  return (
    <section id={id} className={[styles.contentArea, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h2 className={styles.heading2}>Отзывы клиентов</h2>
            <div className={styles.background} />
          </div>
          <a href="#callback" className={styles.button}>
            <div className={styles.text}>Стать клиентом</div>
          </a>
        </div>
        <div className={styles.container4}>
          {backgroundBorderItems.map((item, index) => (
            <BackgroundBorder
              key={index}
              backgroundBorderPadding={item.backgroundBorderPadding}
              backgroundBorderGridColumn={item.backgroundBorderGridColumn}
              backgroundBorderGridRow={item.backgroundBorderGridRow}
              containerPadding={item.containerPadding}
              prop={item.prop}
              prop1={item.prop1}
              prop2={item.prop2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ContentArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ContentArea;
