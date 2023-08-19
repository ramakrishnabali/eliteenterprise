import { useState } from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"


import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import SpecificShop from "./components/SpecificShop"
import Team from "./components/Team"
import Blog from "./components/Blog"
import SpecificBlog from "./components/SpecificBlog"
import ContactUs from "./components/ContactUs"
import NotFound from "./components/NotFound"
import cartContext from "./cartContext"
import "./App.css"






const App = ()=>{
  const [number,setNumber] = useState(0)

  const addToCart = ()=>{
    setNumber(number +1)
    console.log(number)
  }

  return(
    <BrowserRouter>
  <cartContext.Provider value={{number,addToCart}}>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop/:id" element={<SpecificShop />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/:1" element={<SpecificBlog />} />
      <Route exact path="/contactus" element={<ContactUs />} />
      <Route exact path="/not-found" element={<NotFound />} />
      {/* <Route element={<Navigate replace to="/not-found" />} /> */}
    </Routes>
    </cartContext.Provider>
  </BrowserRouter>)
  
}

export default App;
