//lokasyon(haritada gösterecek),tarih,etkinlik fotoğrafları tıklanan lokasyondaki etkinlikleri listele
import React from 'react'
import {IoLocationOutline,IoTodayOutline} from 'react-icons/io5'
import {GoClock,GoShareAndroid} from 'react-icons/go'
import {BiLogoWhatsapp,BiLogoInstagram} from 'react-icons/bi'
import '../styles/detail.scss'
import { Link } from 'react-router-dom'
 const DetailPage = () => {
  return (
    <>
  <div className='container my-5'>

    <div className='imgBanner detailContainer'>
    <div><h2>Aydınlık Evler</h2></div>
      <img src="https://imageprod.passo.com.tr/eventgroup/12032023151650-2.jpg" alt="" />
      <div className='d-flex detailInf'>
    <div>
    <div><IoTodayOutline size={16}></IoTodayOutline> 22.14.2023</div>  
    <div> <GoClock size={16}></GoClock> 20.00</div>
    <div><Link><IoLocationOutline size={16}></IoLocationOutline>Turkcell Vadi,İstanbul </Link></div>
    </div>
    <div class="dropdown dropend shareBtn  ">
    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
     <GoShareAndroid size={16}/>
    </button>
    <ul class="dropdown-menu">
      <li><Link class="dropdown-item disabled" >Etkinliği Paylaş</Link></li>
      <li><Link class="dropdown-item active" > <BiLogoWhatsapp size={14}/>Whatsapp</Link></li>
      <li><Link class="dropdown-item "> <BiLogoInstagram size={14}/>Instagram</Link></li>
    </ul>
     </div>
    </div>
    </div>

    <div className="my-4 p-2 ">
    <h3>Etkinlik Detayları</h3>
    <div><span className="s2"> Özet:</span><span>Yaşamak, zemheriye ve yokluğa direnmek ve Amerika’yla baş etmek üzerine dar gelirli ama zengin bir öykü…
    Burası Aydınlıkevler ve babaannem Amerika’ya karşı!!!</span></div>
    <span className='s2'>Oyuncular:</span> <span>Salih Bademci</span>,<span>Demet Akbağ</span> <span>Sinem Ünsal</span> 
    <div>
    <span className='s2'> Yazan:</span> Yılmaz Erdoğan <br />
     <span className='s2'>Yöneten:</span> Serdar Biliş
     </div>
    
    
     </div>
   
 
      <div className="ticket">
        <div>22 Eylül</div>
        <div><GoClock size={15}></GoClock> 22.00
          <p>KuruÇeşmeArena</p>
        </div>

        <div class="dropdown">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
   Bilet Al
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Avantajlı :350</a></li>
    <li><a class="dropdown-item" href="#">Standart:575</a></li>
    <li><a class="dropdown-item" href="#">Öğrenci:280</a></li>
  </ul>
</div>

      </div>
      <div className="ticket">
        <div>22 eylül</div>
        <div>22.00
          <p>KuruÇeşmeArena</p>
        
        </div>

        <div class="dropdown">
  <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
   Bilet Al
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Avantajlı :350</a></li>
    <li><a class="dropdown-item" href="#">Standart:575</a></li>
    <li><a class="dropdown-item" href="#">Öğrenci:280</a></li>
  </ul>
</div>

      </div>
      <div className="ticket">
        <div>22 eylül</div>
        <div>22.00
          <p>KuruÇeşmeArena</p>
        
        </div>

        <div class="dropdown">
  <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
   Bilet Al
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Avantajlı :350</a></li>
    <li><a class="dropdown-item" href="#">Standart:575</a></li>
    <li><a class="dropdown-item" href="#">Öğrenci:280</a></li>
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