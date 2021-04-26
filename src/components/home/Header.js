import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting='welcome to'
        title='beachwalk resort'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem architecto ex magni recusandae cupiditate!'
      >
        <PrimaryBtn t='1rem'>view details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
