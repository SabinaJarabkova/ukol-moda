import React from 'react';
import './style.css';

import Product from './../Product';

const Accessories = ({name}) => {
  return(
    <div className="accessories">
      <h2>{name}</h2>
      <Product image="blue-handbag.jpg" name="Modrá kabelka" description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti." price={3590} popisek="Modrá kabelka" />
      <Product image="grey-scarf.jpg" name="Šedá vlněná šála" description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné." price={970} popisek="Šedá vlněná šála" />
      <Product image="glasses.jpg" name="Brýle" description="Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly." price={1620} popisek="Brýle" />
    </div>
  )
};

export default Accessories;
