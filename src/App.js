 

import React from 'react';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from './Homepage';
 

const router = createBrowserRouter(createRoutesFromElements(
<>


  <Route path='/' element={<Homepage />} >

    

  </Route>



  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
