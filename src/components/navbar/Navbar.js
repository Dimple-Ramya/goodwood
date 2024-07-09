import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "./logo.png";


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const [cartTot, setCartTot] = useState(0)
    const items = useSelector((store) => store.cartinStore.cartObj)
    console.log(items)

    useEffect(() => {
        const cartTotal = items.reduce((acc, item) => { return acc + item.itemCount }, 0)
        // console.log(cartTotal)
        setCartTot(cartTotal)
    }, [items])

    return (
        <div className='navbar-outer'>
            <Link style={{ marginLeft: "1%" }} to="/"><img src={logo} className='logo' /></Link>
            <ul className='nav-list'>
                <li className='nav-li-items'><Link to="/">Home</Link></li>
                <li className='nav-li-items'><Link to="/about">About</Link></li>
                <li className='nav-li-items'><Link to="/product">Product</Link></li>
            </ul>
            <div className='nav-buttons'>
                <button className='cart-btn'><Link to="/cart">Cart < FaShoppingCart className='cart-icon' /><span className='cart-total'>{cartTot}</span></Link></button>
                <button className='cart-btn'>Login</button>
            </div>

            <div className='small-screen-nav-container'>
                <button className='small-screen-open-button' onClick={() => setOpenNav(true)}><IoMdMenu /></button>
                {
                    openNav &&
                    <div className='nav-small-screen-overlay'>
                        <button className='small-screen-close-button' onClick={() => setOpenNav(false)}><MdClose /></button>
                        <ul className='nav-small-screen-list'>
                            <li className='nav-small-li-items' onClick={() => setOpenNav(false)}><Link to="/">Home</Link></li>
                            <li className='nav-small-li-items' onClick={() => setOpenNav(false)}><Link to="/about">About</Link></li>
                            <li className='nav-small-li-items' onClick={() => setOpenNav(false)}><Link to="/product">Product</Link></li>
                        </ul>
                        <div className='nav-small-screen-buttons'>
                            <button className='small-cart-btn' onClick={() => setOpenNav(false)}><Link to="/cart">Cart < FaShoppingCart className='cart-icon' /><span className='cart-total'>{cartTot}</span></Link></button>
                            <button className='small-cart-btn' >Login</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar