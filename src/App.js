import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';

export default function App() {

  let router=useRoutes(routers)
  return (
    <div>
      {router}
    </div>
  );
}
