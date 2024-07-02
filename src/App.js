import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, Outlet, Routes, Router, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import ItemDisplay from './components/itemdisplay/ItemDisplay';
import Cart from './components/cart/Cart';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/product/:id",
        element: <ItemDisplay />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

function App() {


  return (
    // <>
    //   <Navbar />
    //   <Home />
    //   <About/>
    // </>


    // <div className="App">
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //     <Route path='/about' element={<About />}></Route>
    //   </Routes>
    //   {/* <Footer /> */}
    // </div>


    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
