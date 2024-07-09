import React, { useEffect, useState } from 'react'
import "./ProductDisplay.css"
import { IoGrid } from "react-icons/io5";
import { PiListBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Shimmer from '../Shimmer';

const ProductDisplay = ({ finalFilteredList }) => {
    const [prodList, setProdList] = useState([])
    const [viewStyle, setViewStyle] = useState("list")
    const [sortedList, setSortedList] = useState([])
    const [noofProducts, setNoofproducts] = useState(0)
    // console.log(prodCatList && prodCatList)

    useEffect(() => {
        finalFilteredList.length !== 0 && handleFilter("price-lowest")
    }, [finalFilteredList])

    console.log(finalFilteredList)

    const handleFilter = (value) => {
        //  console.log(value)
        const sortItems = (finalFilteredList, value) => {
            switch (value) {
                case 'price-lowest':
                    return finalFilteredList.slice().sort((a, b) => a.price - b.price);
                case 'price-highest':
                    return finalFilteredList.slice().sort((a, b) => b.price - a.price);
                case 'name-asc':
                    return finalFilteredList.slice().sort((a, b) => a.name.localeCompare(b.name));
                case 'name-desc':
                    return finalFilteredList.slice().sort((a, b) => b.name.localeCompare(a.name));
                default:
                    return finalFilteredList;
            }
        };


        const sorted = sortItems(finalFilteredList, value);
        // console.log(sorted)
        setSortedList(sorted)
        const no_of_prod = sorted.length
        setNoofproducts(no_of_prod)
    }

    return (
        <div className='prod-display-box'>
            <div style={{ display: "flex", width: "90%", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                    <button onClick={() => setViewStyle("grid")} className={viewStyle === "grid" ? "grid-btn grid-btn-click" : "grid-btn"}><IoGrid className='grid-icon' /></button>
                    <button onClick={() => setViewStyle("list")} className={viewStyle === "list" ? "grid-btn grid-btn-click" : "grid-btn"}><PiListBold className='grid-icon' /></button>
                </div>
                <p className='prod-para'>{noofProducts} products found</p>
                <div className='hr-line'></div>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "20%" }}>
                    <p className='prod-para'>Sort By</p>
                    <select className='dropdown' onChange={(e) => handleFilter(e.target.value)}>
                        <option value="price-lowest">Price(Lowest)</option>
                        <option value="price-highest">Price(Highest)</option>
                        <option value="name-asc">Names(A-Z)</option>
                        <option value="name-desc">Names(Z-A)</option>
                    </select>
                </div>
            </div>

            <div>
                {sortedList.length === 0 ?
                    // <div style={{ display: "flex" }}>
                    //     <div style={{ width: "25%", height: "20%", backgroundColor: "green" }}></div>
                    //     <div style={{ width: "70%", height: "20%", backgroundColor: "pink", marginLeft: "5%" }}></div>
                    // </div>
                    <h2 className='loading-heading'>...Loading </h2>
                    :
                    <>
                        {viewStyle === "list" && sortedList.map((product) => {
                            return (
                                <div key={product.id} className='list-view' >
                                    <img src={product.image} className='prod-img' />
                                    <div className='list-prod-matter-box'>
                                        <p className='prod-name'>{product.name}</p>
                                        <p className='prod-price'>${product.price}</p>
                                        <p className='prod-des'>{product.description}...</p>
                                        <Link to={"/product/" + product.id}><button className='details-btn'>Details</button></Link>
                                    </div>
                                </div>
                            )
                        })
                        }

                        <div className='grid-view'>
                            {viewStyle === "grid" && sortedList.map((product) => {
                                return (
                                    <div key={product.id} className='each-grid-item'>
                                        <Link to={"/product/" + product.id}><img src={product.image} className='grid-prod-img' /></Link>
                                        <div className='grid-prod-matter-box' >
                                            <p className='prod-name'>{product.name}</p>
                                            <p className='prod-price'>${product.price}</p>
                                            <p className='grid-prod-des'>{product.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>


                }
            </div>
        </div>
    )
}

export default ProductDisplay