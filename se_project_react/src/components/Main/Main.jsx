import Weathercard from "../Weathercard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

import "./Main.css";

function Main({ weatherData }) {
  return (
    <main>
      <Weathercard />
      <section className="cards">
        <p className="cards_text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
