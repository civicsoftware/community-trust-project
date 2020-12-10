import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card'; 

import ROUTES, { RenderRoutes } from './routes';


function App() {
  return (
      <>
        <RenderRoutes routes={ROUTES}/>
        <Card>
          <Link to={'/avatars'}>Avatars</Link>
          <Link to={'/context'}>Context</Link>
        </Card>
      </>
  );
}

export default App;
