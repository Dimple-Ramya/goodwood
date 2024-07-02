import React from 'react'
import "./Home.css"
import home_img from './home-img.png'
import FeaturedProduct from './FeaturedProduct'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='home-box'>
                <div className='home-matter-container'>
                    <h1 className='home-heading'>Design Your Comfort Zone</h1>
                    <p className='home-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <Link to="/product"><button className='home-btn'>SHOP NOW</button></Link>
                </div>
                <img src={home_img} alt='home-img' className='home-img' />
            </div>
            <FeaturedProduct />
        </div>
    )
}

export default Home