import React,{useEffect ,useState} from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import PostForm from './components/PostForm'
import { AuthProvider } from './components/Authorisation'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'
//import PrivateRoute from './components/PrivateRoute'


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products data
    fetch("https://homy-6bvz.onrender.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Cart after adding:', cart); 
  };
  

  const removeFromCart = (itemId) => {
    // Remove item from the cart based on itemId
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };
  
  return (
    <div>
    <AuthProvider>
      <NavBar />
      <Routes>
        < Route path='/' element={<Login/>}></Route>        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/products" element={<Products products={products} addToCart={addToCart}/>}></Route>
          <Route path="/postform" element={<PostForm />}></Route>
         <Route path= "/cart" element={<ShoppingCart removeFromCart={removeFromCart} cart={cart}/>}></Route>
      </Routes>
      <Footer />
    </AuthProvider>
  </div>
  )
}

export default App