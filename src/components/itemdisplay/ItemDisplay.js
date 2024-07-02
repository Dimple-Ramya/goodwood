import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaPlus, FaMinus } from "react-icons/fa6";

import "./ItemDisplay.css"
import { useDispatch } from 'react-redux';
import { addItems } from '../../store/slices/CartSlice';

const ItemDisplay = () => {
    const [eachItem, setEachItem] = useState([])
    const [eachImg, setEachImg] = useState([])
    const [imgUrl, setImgUrl] = useState("")
    const [itemCount, setItemCount] = useState(1)
    const id = useParams()
    // console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://www.course-api.com/react-store-single-product?id=" + id.id);
                const data = await res.json();
                // console.log(data);
                setEachItem(data)
                setEachImg(data.images)
                setImgUrl(data.images[0].url)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [])

    console.log(eachItem)
    // eachItem.images[0].url
    const handleAddItem = (eachItem) => {
        dispatch(addItems({ eachItem, itemCount }))
    }

    return (
        <>
            {eachItem.length !== 0 &&
                <>
                    <h1 className='item-head'>{eachItem.name}</h1>
                    <div className='itemdis-box'>
                        <div className='images-box'>
                            <img src={imgUrl} alt="item-img-1" className='item-display-img' />
                            <div className='small-imgs-box' >
                                {eachImg.map((img) => {
                                    return (
                                        <img src={img.url} className={img.url === imgUrl ? 'small-img small-img-active' : 'small-img'} onClick={() => setImgUrl(img.url)} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='item-matter-box'>
                            <h2 className='item-name'>{eachItem.name}</h2>
                            <h2 className='item-price'>${eachItem.price}</h2>
                            <h2 className='item-des'>{eachItem.description}</h2>
                            <h2 style={{ fontSize: "20px", fontWeight: "400", marginTop: 0, marginBottom: 0 }}>Brand: <span>{eachItem.company}</span></h2>
                            <div className='count-box'>
                                <button className='add-btn' onClick={() => { itemCount > 1 ? setItemCount(itemCount - 1) : setItemCount(1) }}><FaMinus /></button>
                                <h2 className='count-val'>{itemCount}</h2>
                                <button className='add-btn minus-btn' onClick={() => setItemCount(itemCount + 1)}><FaPlus /></button>
                            </div>
                            <Link to="/cart"><button className='add-to-cart-btn' onClick={() => handleAddItem(eachItem)}>Add to Cart</button></Link>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ItemDisplay