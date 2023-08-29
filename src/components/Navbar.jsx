

import React from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../logo2.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<div className='wrapper'>
<nav className='navbar-container'>
    <div><Link to="/"><img src={logo} alt="" /></Link>  </div>
      <div className='search'>
        <input type="text" placeholder='Mekan,etkinlik yada sanatçı arayın' />
      <BiSearch  className='searchBtn' size={20}></BiSearch>
      </div>
</nav>
<nav>
<div className='d-flex justify-content-end mx-4 gap-2'>
   <Link to="/filter" >List Page</Link>
    <Link to="/detailpage" >DetailPage</Link>
   </div>
</nav>
</div>
    </>
  )
}

export default Navbar


