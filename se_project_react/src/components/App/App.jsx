import { useState } from "react";

import Header from "../Header/Header.jsx";
import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main weatherData={weatherData} />
          <ModalWithForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
