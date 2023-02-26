import React from 'react'
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Footer from "./Footer";
import CardsCollection from "./CardsCollection";

export default function Home() {
  return (
    <>
      <Carousel />
      <CardsCollection />
      <Carousel2 />
      <CardsCollection />
      <Footer />
    </>
  );
}
