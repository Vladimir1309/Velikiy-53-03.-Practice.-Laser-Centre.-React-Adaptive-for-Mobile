import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Laser2560px from "./pages/Laser2560px";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Лазерный Центр — лазерная гравировка и резка в Санкт-Петербурге";
        metaDescription =
          "Высокоточная лазерная гравировка и резка с 2006 года. Точность ±0,05 мм, срочные заказы от 2 часов, доставка по России.";
        break;
      case "/privacy-policy":
        title = "Политика конфиденциальности — Лазерный Центр";
        metaDescription = "Страница политики конфиденциальности Лазерного Центра.";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Laser2560px />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;