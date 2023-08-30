import React from 'react'
import EventCart from './EventCart'
const EventCategory= () => {
 const categories=[
  {tittle:"Tiyatro",img:"https://media.istockphoto.com/id/476806603/tr/foto%C4%9Fraf/performer-standing-with-arms-outstretched-on-stage-in-theater.jpg?s=612x612&w=0&k=20&c=Dpa6yaEtJhumyJNUpc83FkIHBTlzgjNaSW6_3tgLJ28="},
{tittle:"Müzik",img:"https://media.istockphoto.com/id/485756494/tr/foto%C4%9Fraf/orchestra-conductor-on-stage.jpg?s=612x612&w=0&k=20&c=xUwmkMPUREZyWsNjdjdhkVSzHQRPMB6ONyi-CBm562o="},
{tittle:"Sinema",img:"https://media.istockphoto.com/id/1226991687/tr/foto%C4%9Fraf/sinemada-y%C3%BCr%C3%BCyen-astronot-ile-uzay-ke%C5%9Ffi-hakk%C4%B1nda-yeni-gerilim-filmi-izleyen-seyirci.jpg?s=612x612&w=0&k=20&c=yVBz-uUmPTynXOfECBfS9B2DBFHFBasDZeeG60ycMZQ="},
{tittle:"Dans&Bale",img:"https://media.istockphoto.com/id/1135143424/tr/foto%C4%9Fraf/tiyatro-sahnesinde-%C4%B1%C5%9F%C4%B1k-ve-duman-ile-bale-s%C4%B1n%C4%B1f%C4%B1-%C3%A7ocuklar-sahnede-klasik-egzersiz-me%C5%9Fgul.jpg?s=612x612&w=0&k=20&c=4ELbZt2uVkArPJpwroCa5bW0ADA42x5XfYzyeVpCJEk="},
]



  return (
    <>
 <div className='container my-4 '> <h3>Kategori</h3></div>

     <div className='container d-flex flex-wrap justify-content-center  '>
     {
      categories.map((ct,index)=>
        <EventCart data={ct} key={index} ></EventCart>
      )   
     }  
       </div>
    </>
  )
}

export default EventCategory