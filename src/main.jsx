import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import {Checkout,ProductPage,SearchResults} from './components/index.js'


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Homepage/>}>
  <Route path='/search' element={<SearchResults/>} />
  <Route path='/product' element={<ProductPage />} />
  <Route path='/checkout' element={<Checkout />} />
 </Route>
  
)

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
