import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import FavoritesPage from "./components/pages/FavoritesPage";
import Header from "./components/Header";
import CardPage from "./components/pages/CardPage";
import PageNotFound from "./components/pages/PageNotFound";
import {useWindowSize} from "./customHooks/useWindowsSize";


function App() {



  return (
      <>
          <Header/>
          <div style={{
              backgroundColor: '#F7F7F8',
              minHeight:'816px',
          }}>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/favorites' element={<FavoritesPage/>}/>
                  <Route path='/vacancy/:id' element={<CardPage/>}/>
                  <Route path='*' element={<PageNotFound/>} />
              </Routes>
          </div>

      </>

  );
}

export default App;
