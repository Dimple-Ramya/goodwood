import React from 'react'
import feature_img1 from "./feature_img1.png"
import feature_img2 from "./feature_img2.png"
import feature_img3 from "./feature_img3.png"
import { Link } from 'react-router-dom'
const FeaturedProduct = () => {
    return (
        <div className='featured-box'>
            <h1 className='featured-head'>Featured Products</h1>

            <div className='feature-imgs-box'>

                <div className='feature-imgs'>
                    <img src={feature_img1} alt='feature_img1' />
                    {/* <div className='feature-imgs-opendrop'>
                        <button >view</button>
                    </div> */}

                    <div className='feature-img-price-box'>
                        <h8 style={{ margin: 0 }}>Entertainment Center</h8>
                        <h10 style={{ margin: 0 }}>$599.99</h10>
                    </div>

                </div>

                <div className='feature-imgs'>
                    <img src={feature_img2} alt='feature_img2' />
                    <div className='feature-img-price-box'>
                        <h8 style={{ margin: 0 }}>High-Back Bench</h8>
                        <h10 style={{ margin: 0 }}>$399.99</h10>
                    </div>
                </div>

                <div className='feature-imgs'>
                    <img src={feature_img3} alt='feature_img3' />
                    <div className='feature-img-price-box'>
                        <h8 style={{ margin: 0 }}>Modern Bookshelf</h8>
                        <h10 style={{ margin: 0 }}>$319.99</h10>
                    </div>
                </div>
            </div>

            <Link to="/product"><button className='home-btn'>VIEW ALL</button></Link>
        </div>
    )
}

export default FeaturedProduct