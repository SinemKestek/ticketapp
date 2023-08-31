//lokasyon(haritada gösterecek),tarih,etkinlik fotoğrafları tıklanan lokasyondaki etkinlikleri listele
import React from 'react'
import  { useContext} from 'react'
import {IoLocationOutline,IoTodayOutline} from 'react-icons/io5'
import {GoClock,GoShareAndroid} from 'react-icons/go'
import {BiLogoWhatsapp,BiLogoInstagram} from 'react-icons/bi'
import '../styles/detail.scss'
import { Link, useParams } from 'react-router-dom'
import Filter from '../components/FilterMenü'
import { GlobalContext } from '../Context/GlobalState'
 const DetailPage = () => {
    const {data}=useContext(GlobalContext)

    
    const { index } = useParams();
    console.log(data[index]);
    const event = data && data[index]; // Check if data[index] is defined
    if (!event) {
      // Handle the case when the event is not found
      return <div>Event not found</div>; }
    return (
       <>
     <Filter></Filter>
<div className="container my-5">
<div className='d-block'>
      <h2>{data[index]?.title}</h2>
      <div className="d-flex detailInf">
      <div>
        <div>
          <IoTodayOutline size={16}></IoTodayOutline>{data[index]?.date}
        </div>
        <div>
        {data[index]?.time}
          <GoClock size={16}></GoClock> 
        </div>
        <div>
          <Link to="/location">
            <IoLocationOutline size={16}></IoLocationOutline>
            {data[index]?.location}
          </Link>
        </div>
      </div>
      <div class="dropdown dropend shareBtn  ">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <GoShareAndroid size={16} />
        </button>
        <ul class="dropdown-menu">
          <li>
            <Link class="dropdown-item disabled">Etkinliği Paylaş</Link>
          </li>
          <li>
            <Link class="dropdown-item active">
          
              <BiLogoWhatsapp size={14} />
              Whatsapp
            </Link>
          </li>
          <li>
            <Link class="dropdown-item ">
        
              <BiLogoInstagram size={14} />
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
{data && (
  <div className="imgBanner detailContainer">
   
  

   

    <img src={data[index]?.img?.banner} alt="" />
    <div className="my-4 p-2 ">
          <h3>Etkinlik Detayları</h3>
          <div>
            <span className="s2"> Özet:</span><span>{data[index]?.sum} </span>
          </div>
          <div className="s2  ">Oyuncular:
          {event.actors?.map((actor)=>
          ( <span className='d-inline-block mx-1 '>{actor}</span>))}
         </div> 
        </div>




  </div>
)}
 

        <div className="ticket">
          <div>{data[index]?.date}</div>
          <div> <GoClock size={15}></GoClock> {data[index]?.time}</div>
          <div>
            <p> <Link >{data[index]?.location}</Link> </p>
          </div>

          <div class="dropdown">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Bilet Al
            </button>
            <ul class="dropdown-menu">
              {event.rate?.map((item) => (
                <li key={item}>
                  <a class="dropdown-item" href="#">
                    {Object.keys(item)} : {Object.values(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      
  

        </div>


      <div className="notice">
       <h2>Etkinlik Kuralları</h2>
       <span>-18 yaş sınırı vardır.</span>
       <span>-Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi telefondan göstermeniz gerekmektedir.</span>
       <span> -Organizatör firma, misafirlere rahatça eğlenebilecekleri bir ortam sunabilmek için mekan girişinde uygun görmediği kişileri kapıda bilet iadesi yaparak içeri almama hakkına sahiptir.</span>
     </div>
     
     </div>
    </>
 

  )
}

export default DetailPage