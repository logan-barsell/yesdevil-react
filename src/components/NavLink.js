import React, { useEffect, useState } from 'react';
import Link from './Link';

const NavLink = ({ routes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onNavClick = (index) => {
    setActiveIndex(index);
  };


  const renderedNavItems = routes.map((route, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <Link key={index} href={route.value} className={`nav-item nav-link ${active}`} onNavClick={() => onNavClick(index)}>{route.name}</Link>
    );
  });

  return renderedNavItems;
    

  

};

export default NavLink;