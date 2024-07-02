import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
const Sidebar = ({ handleCategory, activeCate, handleCompany, maxPrice, price, handlePriceRange ,handleClearFilters}) => {


    return (
        <div className='sidebar-box'>
            <ul className='category-ul'>Category</ul>
            <li className={activeCate === "all" ? "active-item" : "category-list-items"} onClick={() => handleCategory("all")}>All</li>
            <li className={activeCate === "office" ? "active-item" : "category-list-items"} onClick={() => handleCategory("office")}>Office</li>
            <li className={activeCate === "living room" ? "active-item" : "category-list-items"} onClick={() => handleCategory("living room")}>Living Room</li>
            <li className={activeCate === "kitchen" ? "active-item" : "category-list-items"} onClick={() => handleCategory("kitchen")}>Kitchen</li>
            <li className={activeCate === "bedroom" ? "active-item" : "category-list-items"} onClick={() => handleCategory("bedroom")}>Bedroom</li>

            <div>
                <h4 className='comp-head'>Company</h4>
                <select className='company-dropdown' onChange={(e) => handleCompany(e.target.value)}>
                    <option value="all">all</option>
                    <option value="marcos">marcos</option>
                    <option value="liddy">liddy</option>
                    <option value="ikea">ikea</option>
                    <option value="caressa">caressa</option>
                </select>
            </div>

            <div>
                <h4 className='comp-head'>Price</h4>
                <p className='price-val'>${price === 0 ? maxPrice : price}</p>
                <input
                    type='range'
                    min="0"
                    max={maxPrice}
                    name="price"
                    id="slider"
                    defaultValue={maxPrice}
                    onChange={(e) => handlePriceRange(e.target.value)}
                />
            </div>

            <button className='clear-filters-btn' onClick={handleClearFilters}>Clear Filters</button>
        </div>
    )
}

export default Sidebar