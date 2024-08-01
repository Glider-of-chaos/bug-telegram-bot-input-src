import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { InputTest } from './InputTest'
import { IframeTest } from './IframeTest';
import React from 'react';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <InputTest/>,
  },
  {
    path: "/input",
    element: <InputTest/>,
  },
  {
    path: "/iframe",
    element: <IframeTest/>,
  },
]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
