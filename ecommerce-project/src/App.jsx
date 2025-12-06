import axios from 'axios';
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { Routes, Route } from 'react-router'
import { NotFoundPage } from './pages/NotFoundPage'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //fetch backend data for cart-items
    axios.get('https://fantastic-goldfish-9gv6jpv4wxq3x76-3000.app.github.dev/api/cart-items')
      .then((response) => {
        setCart(response.data)
      });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />}></Route>
      <Route path='orders' element={<OrdersPage />}></Route>
      <Route path='tracking' element={<TrackingPage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
