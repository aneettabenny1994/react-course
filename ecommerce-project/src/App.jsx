import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { Routes, Route } from 'react-router'

function App() {
  return (
   <Routes>
    <Route index element={<HomePage />} />
    <Route path='checkout' element={<CheckoutPage />}></Route>
    <Route path='orders' element={<OrdersPage />}></Route>
   </Routes>
  )
}

export default App
