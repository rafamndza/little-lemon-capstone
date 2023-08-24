import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../images/restaurantfood.jpg'

export default function Header() {
  return (
   <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterraneran restaurant, focused on traditional 
                    recipes served with a modern twist.
                </p>
                <Link to ="/booking">
                    <button aria-label='On Click'>Reserve Table</button>
                </Link>
            </div>
            <div className='banner-img'>
                <img src={BannerImg} alt=""/>
            </div>
        </section>
   </header>
  )
}
