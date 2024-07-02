import React from 'react'
import "./About.css"
import about_img from "./about-img.png"

const About = () => {
    return (
        <div>
            <h1 className='about-head'>About</h1>
            <div className='about-box'>
                <img src={about_img} alt='about-img' className='about-img' />
                <div className='about-matter-container'>
                    <h1 className='about-heading'>Our Story</h1>
                    <p className='about-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                </div>

            </div>
        </div>
    )
}

export default About