import React from 'react';
import './style.css';

import Product from './../Product';

const Shoes = ({foto, name, description, price, altik}) => {
  return(
    <div className="dresses">
      <h2>{name}</h2>
      <Product image="running-shoes.jpg" name="Běhací tenisky" description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost." price={1790} popisek="Běhací tenisky" />
      <Product image="shiny-shoes.jpg" name="Třpytivé lodičky" description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět." price={2950} popisek="Třpytivé lodičky" />
      <Product image="red-shoes.jpg" name="Červené botičky" description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet." price={6200} popisek="Červené botičky" />
    </div>
  )
};

export default Shoes;