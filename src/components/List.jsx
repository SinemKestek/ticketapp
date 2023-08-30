
import '../styles/list.scss'
import React, { useEffect } from 'react'
import { useGlobalContext} from '../Context/GlobalState'


const List = () => {
  const {data}=useGlobalContext();


  useEffect(()=>{
 
    console.log(data)
    data.map((dt)=>console.log(dt))
    
   })


  return (

    <div div className='container'>
   
     <div className=' list-menu '>
       <div className='eventTitle '>Etkinlik</div>
          <div className='eventTitle '>Mekan</div>
          <div className='eventTitle '>Tarih</div>
     </div>
<div className='container my-4 '>
{
  data.map((dt)=>{
    <div className="listWrapper   ">
    <div className='eventInf '>
         <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
         <div>
        <h3>{dt.title}</h3>
       <span className='small'>Satışta</span>
        </div>
      </div>
      
    <div className='eventInf  '>
        <a href=''>{dt.location}</a>
          <span>İstanbul</span>
    </div>
    <div className='eventInf '>Paz,27/08/23</div>
    </div>
  })
}







   {/* <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div> 
  
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div>
   <div className="listWrapper  ">
   <div className='eventInf '>
        <img src="https://i.pinimg.com/474x/05/e3/e1/05e3e13a9f248810c6afee5c7dbbe31e.jpg" alt=""  className='eventBanner' /> 
        <div>
       <h3>Zengin Mutfağı</h3>
      <span>Satışta</span>
       </div>
     </div>
     
   <div className='eventInf  '>
       <p>Zorlu Performans Sanatları</p>
         <span>İstanbul</span>
   </div>
   <div className='eventInf  '>Paz,27/08/23</div>
   </div> */}

</div>

       
    </div>
  )
}

export default List