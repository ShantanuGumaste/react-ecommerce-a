import React from "react";
import Cards from "./Cards";
import "./Cards.css";

export default function CardsCollection() {
  let cards = [
    {
      cardTitle: "DOMYOS",
      cardDescription: "Men's Fitness Standard Breathable Jacket - Green",
      price: "999",
      imageName:
        "https://contents.mediadecathlon.com/p2401133/k$ca8b46049f035747f7c2006850aff98a/men-s-fitness-standard-breathable-jacket-green.jpg?format=auto&quality=70&f=300x0",
    },
    {
      cardTitle: "KALENJI",
      cardDescription: "Men's Running Shoes Run Cushion with extra comfort- Blue",
      price: "1499",
      imageName:
        "https://contents.mediadecathlon.com/p2155519/675a901c012338809f9e6dda7dd6ea6b/p2155519.jpg?format=auto&quality=70&f=650x0",
    },
    {
      cardTitle: "QUECHUA",
      cardDescription: "Men’s Waterproof Winter Hiking Jacket - Blue",
      price: "1699",
      imageName:
        "https://contents.mediadecathlon.com/p2172599/31e38371875cbaa821ecf41aaf551f63/p2172599.jpg?format=auto&quality=70&f=1024x0",
    },
    {
      cardTitle: "ARTENGO",
      cardDescription: "TR160 Graph Adult Tennis Racket - White Rating",
      price: "1899",
      imageName:
        "https://contents.mediadecathlon.com/p1698332/62c038f4c19161ffac6c587d1d17d566/p1698332.jpg?format=auto&quality=70&f=1024x0",
    },
  ];

  let list = [];

  cards.forEach((card) => {
    list.push(
      <Cards
        cardTitle={card.cardTitle}
        cardDescription={card.cardDescription}
        price={card.price}
        imageName={card.imageName}
      />
    );
  });
  return (
    <div className="product_div">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-3">
        {list}
      </div>
    </div>
  );
}
