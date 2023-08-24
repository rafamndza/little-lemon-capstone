import React from 'react'
import Logo from '../images/Logo .svg'

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={Logo} alt=""/>
                <p>
                    We are a family owned Mediterraneran restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Menu</a>
                    </li>
                    <li>
                        <a href='/'>Reservations</a>
                    </li>
                    <li>
                        <a href='/'>Order Online</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address:<br/>1355 Market Street, California,USA. </li>
                    <li>Phone:<br/>+714 455 2518</li>
                    <li>Email:<br/>customerservice@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li><a href=''>Facebook</a></li>
                    <li><a href=''>Instagram</a></li>
                    <li><a href=''>Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}
