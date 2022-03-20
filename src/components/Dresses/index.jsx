import React from 'react';
import './style.css';

import Product from './../Product';

const Dresses = ({name}) => {
  return(
    <div className="dresses">
      <h2>{name}</h2>
      <Product image="red-dress.jpg" name="Červené šaty" description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií." price={2290} popisek="Červené šaty" />
      <Product image="flower-dress.jpg" name="Květované šaty" description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat." price={3100} popisek="Květované šaty" />
      <Product image="yellow-dress.jpg" name="Žluté šaty" description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě." price={4250} popisek="Žluté šaty" />
    </div>
  )
};

export default Dresses;
