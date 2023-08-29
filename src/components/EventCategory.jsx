import React from 'react'
import EventCart from './EventCart'
const EventCategory= () => {
  return (
    <>
 <div className='container my-4'> <h3>Kategori</h3></div>

     <div className='container d-flex flex-wrap justify-content-evenly'>
     
        <EventCart title="Müzik"/>
        <EventCart title="Sahne"/>
        <EventCart title="Bale & Dans"/>
        <EventCart title="Sinema"/>
        
       </div>
    </>
  )
}

export default EventCategory