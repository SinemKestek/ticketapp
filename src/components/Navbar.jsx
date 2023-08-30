

import React, { useRef } from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../logo2.jpg'
import { Link, useNavigate} from 'react-router-dom'
import Filter from '../pages/Filter'
import CategoryDetail from '../pages/CategoryDetail'
import { useGlobalContext } from '../Context/GlobalState'


const Navbar = () => {
  const {setSearchTerm,setResultTitle}=useGlobalContext()
   const searchText=useRef('')
   const navigate=useNavigate()

const handleSubmit=(e)=>{
  let tempSearchTerm=searchText.current.value.trim();
  console.log(tempSearchTerm)
  if (e.key === "Enter") {
  // setSearchTerm(tempSearchTerm);
 navigate("/filter")
}}

  
  return (
   <>
<div className='wrapper'>
<nav className='navbar-container'>
    <div><Link to="/"><img src={logo} alt="" /></Link>  </div>
    <ul className='d-flex justify-content-center categoryMenü'>
    <li><Link to={"categoryDetail/Müzik"}>Müzik</Link></li>
    <li><Link to={"categoryDetail/Tiyatro"}>Tiyatro</Link></li>
    <li><Link to={"categoryDetail/Sinema"}>Sinema</Link></li>
    <li><Link to={"categoryDetail/Bale&Dans"}>Bale&Dans</Link></li>
  </ul>

      <div className='search'>
        <input onKeyUp={handleSubmit} ref={searchText} type="text" placeholder='Mekan,etkinlik yada sanatçı arayın' />
        <BiSearch  className='searchBtn' size={20}></BiSearch>
      </div>
</nav>
</div>
    </>
  )
}

export default Navbar

