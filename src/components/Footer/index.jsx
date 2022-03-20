import React from 'react';
import './style.css';

const Footer = ({year, author}) => {
  return(
    <div className="footer">
      <p className="footer__copyright">&copy; {year}, {author}</p>
      <p className="footer__disclosure">"Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí."</p>
    </div>
  )
};

export default Footer;

