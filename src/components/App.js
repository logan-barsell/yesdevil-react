import './css/App.css';
import 'pace-js';
// import './plugins/pace.min.js';
import 'pace-js/themes/red/pace-theme-loading-bar.css';

import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import HomePage from './Home';
import MusicPage from './Music';
import MerchPage from './Merch';
import MediaPage from './Media';
import BioPage from './Bio';
import ContactPage from './Contact';
import history from '../history';


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
  const [toggle, setToggle] = useState(false);


  return (
    <Router history={history}>
      <ActiveContext.Provider value={{ activeIndex, setActiveIndex, toggle, setToggle}}>
        <TopNav  routes={routes} />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/music" exact element={<MusicPage />} />
            <Route path="/merch" exact element={<MerchPage />} />
            <Route path="/media" exact element={<MediaPage />} />
            <Route path="/aboutus" exact element={<BioPage />} />
            <Route path="/contact" exact element={<ContactPage />} />
          </Routes>
        <BottomNav  routes={routes} />
        </ActiveContext.Provider>
    </Router>
  );
}

export default App;