import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import PostForm from './components/PostForm'
import Cart from './components/ShoppingCart'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path='/dashboard' element={<Home />}></Route>

        <Route path="/products" element={<Products />}></Route>
        <Route path="/postform" element={<PostForm />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App