import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeItems } from '../../store/slices/CartSlice';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
    const [subtot, setSubTot] = useState(0)
    const [emptyCart, setEmptyCart] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector((store) => store.cartinStore.cartObj)
    console.log(items)

    useEffect(() => {
        calcSubtot()
        if (items.length === 0){
            setEmptyCart(true)
        }
    }, [items])

    const handleAddItem = (itemCount, index) => {
        const specificItem = items[index]
        console.log(specificItem)
        dispatch(addItems({ eachItem: specificItem, itemCount: itemCount + 1 }))
    }

    const handleRemoveItem = (itemCount, index) => {
        if (itemCount > 1) {
            const specificItem = items[index]
            console.log(specificItem)
            dispatch(addItems({ eachItem: specificItem, itemCount: itemCount - 1 }))
        }
    }

    const calcSubtot = () => {
        const subtotal = items.reduce((acc, item) => { return acc + (item.price * item.itemCount) }, 0)
        // console.log(subtotal)
        setSubTot(subtotal)
    }

    const handleDelItem = (itemName) => {
        dispatch(removeItems(itemName))
    }

    {
        if (emptyCart) {
            return (
                <div style={{ textAlign: "center", paddingTop: "15%" }}>
                    <h1>Your Cart is Empty</h1>
                    <Link to="/product"><button className='fill-it-btn'>Fill It</button></Link>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1 className='cart-head'>Cart</h1>
                    <table className='table-outer-box'>
                        <thead >
                            <tr >
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index} className='row-box'>
                                        <td>
                                            <div className='item-box'>
                                                <img className='item-img' src={item.images[0].url} alt="item-img" />
                                                <p className='cart-item-name'>{item.name}</p>
                                            </div>
                                        </td>
                                        <td><p className='cart-item-price'>${item.price}</p></td>
                                        <td>
                                            <div className='item-count-box'>
                                                <button className='item-add-btn' onClick={() => handleRemoveItem(item.itemCount, index)}><FaMinus /></button>
                                                <h2 className='item-count-val'>{item.itemCount}</h2>
                                                <button className='item-add-btn' onClick={() => handleAddItem(item.itemCount, index)}><FaPlus /></button>
                                            </div>

                                        </td>
                                        <td><p className='cart-item-price'>${item.price * item.itemCount}</p></td>
                                        <td><button className='del-btn' onClick={() => handleDelItem(item.name)}><AiFillDelete /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                    <table className='small-screen-table-outer-box'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index} className='row-box'>
                                        <td>
                                            <div className='item-box'>
                                                <img className='item-img' src={item.images[0].url} alt="item-img" />
                                                <div className='cart-item-name-price-box'>
                                                    <p className='cart-item-name'>{item.name}</p>
                                                    <p className='cart-item-price'>${item.price}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='item-count-box'>
                                                <button className='item-add-btn' onClick={() => handleRemoveItem(item.itemCount, index)}><FaMinus /></button>
                                                <h2 className='item-count-val'>{item.itemCount}</h2>
                                                <button className='item-add-btn' onClick={() => handleAddItem(item.itemCount, index)}><FaPlus /></button>
                                            </div>

                                        </td>
                                        <td><button className='del-btn' onClick={() => handleDelItem(item.name)}><AiFillDelete /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className='bottom-btns'>
                        <Link to="/product" ><button className='continue-shop-btn'>Continue Shopping</button></Link>
                        <button className='continue-shop-btn clear-cart-btn' onClick={() => {
                            handleDelItem("clearall")
                            setEmptyCart(true)
                        }}>Clear Shopping Cart</button>
                    </div>

                    <div className='total-outer-box'>
                        <div className='total-box'>
                            <div style={{ borderBottom: "1px solid silver", width: "95%" }}>
                                <div style={{ width: "92%", display: "flex", height: "10%", justifyContent: "space-between" }}>
                                    <h4 className='subtotal-head'>Subtotal:</h4>
                                    <h4 className='subtotal-val'>${subtot}</h4>
                                </div>
                                <div style={{ width: "92%", display: "flex", height: "10%", justifyContent: "space-between" }}>
                                    <h4 className='subtotal-head'>Shipping Fee:</h4>
                                    <h4 className='subtotal-val'>$5</h4>
                                </div>
                            </div>
                            <div style={{ width: "88%", display: "flex", height: "10%", justifyContent: "space-between" }}>
                                <h4 className='order-total-head'>Order Total:</h4>
                                <h4 className='order-total-val'>${subtot + 5}</h4>
                            </div>
                        </div>
                        <button className='cart-login-btn'>Login</button>
                    </div>
                </div >
            )
        }
    }
}

export default Cart