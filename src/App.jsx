import React from 'react';
import { default as Windmill } from '@windmill/react-ui';

import ROUTES, { RenderRoutes } from './routes';
import Header from './Header';


function App() {

  return (
      <Windmill.Windmill>
        <RenderRoutes routes={ROUTES}/>
        <Header />

        {/* HERO CARD */}
        <div className="container mx-auto m-6 px-4 grid grid-cols-1 justify-center">
          <p className="text-5xl mb-4 mt-10 font-semibold justify-self-center">
            Community data, in context.
          </p>
          <div className="text-xl justify-self-center">
            This is a very good mission statement that is concise and inspiring.
          </div>
          <div class="items-center justify-self-center mt-8">
            <a href="#" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Request a Dataset
            </a>
            <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 px-4 py-2 hover:text-gray-900">
              Contribute to the Library
            </a>
          </div>
        </div>
        {/* End hero card */}


          {/* FOOTER */}
          {/* <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              This is a footer.
            </Typography>
          </footer> */}
          {/* End footer */}
      </Windmill.Windmill>
  );
}

export default App;
