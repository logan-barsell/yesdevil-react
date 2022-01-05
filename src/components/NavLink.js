import React, { useContext } from 'react';
import { ActiveContext } from './App';
import Link from './Link';

const NavLink = ({ routes, menuToggle }) => {
  
  // const [activeIndex, setActiveIndex] = useState(0);
  const { setActiveIndex, activeIndex } = useContext(ActiveContext);

  const onNavClick = (index) => {
    setActiveIndex(index);
    menuToggle();
    window.scrollTo({ top: 0});
  };

  const renderedNavItems = routes.map((route, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <Link key={index} href={route.value} className={`nav-item nav-link ${active}`} onNavClick={() => onNavClick(index)} >{route.name}</Link>
    );
  });

  return renderedNavItems;
    

  

};

export default NavLink;