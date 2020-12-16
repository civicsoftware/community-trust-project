import React from 'react';
import { default as Windmill } from '@windmill/react-ui';

import ROUTES, { RenderRoutes } from './routes';
import Navbar from './Navbar';
import Home from './Home';


function App() {

  return (
      <Windmill.Windmill>
        <Navbar />
        <RenderRoutes routes={ROUTES}/>
        <Home />
      </Windmill.Windmill>
  );
}

export default App;
