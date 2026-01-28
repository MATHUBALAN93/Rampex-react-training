import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Navbar from "./pages/Navbar"
import ProductList from "./pages/ProductList"
import Form from "./hooks/Form"

const App = () => {
  return (
  <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/products/:id" element = {<ProductList/>}/>
      </Routes>
      <div>
        <Form/>
      </div>
  </>
  )
}

export default App


