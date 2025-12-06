import axios from 'axios';
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { Routes, Route } from 'react-router'
import { NotFoundPage } from './pages/NotFoundPage'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //fetch backend data for cart-items
    axios.get('https://friendly-space-fishstick-r597pj9vw9q2rpv-3000.app.github.dev/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data)
      });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />}></Route>
      <Route path='orders' element={<OrdersPage cart={cart} />}></Route>
      <Route path='tracking' element={<TrackingPage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
