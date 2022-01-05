import React, { useState, createContext } from 'react';

import './css/App.css';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Route from './Route'
import HomePage from './Home';
import MusicPage from './Music';
import MerchPage from './Merch';
import MediaPage from './Media';
import BioPage from './Bio';
import ContactPage from './Contact';

export const ActiveContext = createContext();

const App = () => {
  
  const routes = [
    {name:'Home', value:'/'},
    {name:'Music', value:'/music'},
    {name:'Store', value:'/merch'},
    {name:'Media', value:'/media'},
    {name:'About Us', value:'/aboutus'},
    {name:'Contact', value:'contact'}
  ];

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <ActiveContext.Provider value={{ activeIndex, setActiveIndex}}>
      <TopNav routes={routes} />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/music">
        <MusicPage />
      </Route>
      <Route path="/merch">
        <MerchPage />
      </Route>
      <Route path="/media">
        <MediaPage />
      </Route>
      <Route path="/aboutus">
        <BioPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <BottomNav routes={routes} />
    </ActiveContext.Provider>
  );
}

export default App;