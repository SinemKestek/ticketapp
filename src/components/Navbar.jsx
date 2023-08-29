

import React from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../logo2.jpg'
import { Link } from 'react-router-dom'
import Filter from '../pages/Filter'

const Navbar = () => {
  return (
    <>
<div className='wrapper'>
<nav className='navbar-container'>
    <div><Link to="/"><img src={logo} alt="" /></Link>  </div>
    <ul className='d-flex justify-content-center categoryMenü'>
    <li><Link to="Filter">Müzik</Link></li>
    <li><Link>Sahne</Link></li>
    <li><Link>Sinema</Link></li>
    <li><Link>Bale&Dans</Link></li>
  </ul>

      <div className='search'>
        <input type="text" placeholder='Mekan,etkinlik yada sanatçı arayın' />
      <BiSearch  className='searchBtn' size={20}></BiSearch>
      </div>
</nav>
</div>
    </>
  )
}

export default Navbar


