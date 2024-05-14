import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements, Routes } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import SearchResults from './components/SearchResults.jsx'
import ProductPage from './components/ProductPage.jsx'
import Checkout from './components/Checkout.jsx'
import Layout from './components/Layout.jsx'



const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='' element = {<Layout />}>
  <Route path="/" element={<Homepage />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/product/:id" element={<ProductPage />} />
  <Route path="/checkout" element={<Checkout />} />
</Route>
)

)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
