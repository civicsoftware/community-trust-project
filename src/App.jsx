import React, { useState } from 'react';
import { default as Windmill } from '@windmill/react-ui';

import ROUTES, { RenderRoutes } from './routes';
import Header from './Header';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
      <Windmill.Windmill>
        <RenderRoutes routes={ROUTES}/>
        <Header />

        {/* Hero Card */}
        <div className="container mx-auto m-6 px-4 grid grid-cols-1 justify-center">
          <p className="text-5xl mb-4 mt-10 font-semibold justify-self-center">
            Community data, in context.
          </p>
          <div className="text-xl justify-self-center">
            This is a very good mission statement that is concise and inspiring.
          </div>
          <div className="items-center justify-self-center mt-8">
            <Windmill.Button onClick={openModal} className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Request a Dataset
            </Windmill.Button>
            {/* <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 px-4 py-2 hover:text-gray-900">
              Contribute to the Library
            </a> */}
          </div>
        </div>
        {/* End hero card */}

        {/* Modals for data submission forms */}
        <Windmill.Modal isOpen={isModalOpen} onClose={closeModal}>
          <Windmill.ModalHeader>Request a Dataset</Windmill.ModalHeader>
          <Windmill.ModalBody>
            This is a very neat way to request a dataset. It will probably have some form fields and stuff.
          </Windmill.ModalBody>
          <Windmill.ModalFooter>
            <Windmill.Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
              Cancel
            </Windmill.Button>
            <Windmill.Button className="w-full sm:w-auto">Accept</Windmill.Button>
          </Windmill.ModalFooter>
        </Windmill.Modal>
        {/* End modals */}

      </Windmill.Windmill>
  );
}

export default App;
