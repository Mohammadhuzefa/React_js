import { Route, Router, Routes } from "react-router-dom"

import Layout from "./Layout"
import Home from "./Home"
import ProductDetail from "./ProductDetail"
import Product from "./Product"
import Login from "./Login"
// import BookingForm from "./BookingForm"
import OrderPage from "./OrderPage"
import InvoicePage from "./InvoicePage"
import AuthPage from "./AuthPage"
import Signature_Perfume from "./Signature_Perfume"
import CustomizeBottle from "./CustomizeBottle"






function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/product' element={ <Product /> } />
      <Route path='/Signature_Perfume' element={ <Signature_Perfume /> } />
      <Route path='/CustomizeBottle' element={ <CustomizeBottle /> } />
      <Route path='/productdetail' element={ <ProductDetail /> } />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/invoice" element={<InvoicePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path='/login' element={ <Login /> }/>
      </Route>
    </Routes>
    </>
  )
}
export default App