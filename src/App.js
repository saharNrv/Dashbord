import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import Header from './Components/header/Header';
import SideBar from './Components/sidebar/SideBar';

export default function App() {

  let router=useRoutes(routers)
  return (
    <div>
      <Header/>
      <div className="container">

      <SideBar/>
      {router}
      </div>
    </div>
  );
}
