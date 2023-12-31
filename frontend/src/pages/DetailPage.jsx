//lokasyon(haritada gösterecek),tarih,etkinlik fotoğrafları tıklanan lokasyondaki etkinlikleri listele
import React, { useState } from "react";
import { useContext } from "react";
import { IoLocationOutline, IoTodayOutline } from "react-icons/io5";
import { GoClock, GoShareAndroid } from "react-icons/go";
import { BiLogoWhatsapp, BiLogoInstagram } from "react-icons/bi";
import "../styles/detail.scss";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import { GlobalContext } from "../Context/GlobalState";
import moment from "moment";
import "moment/locale/tr";
import EventMap from "../components/EventMap";
import { Button } from "antd";

moment.locale("tr");
const DetailPage = () => {
  const { data } = useContext(GlobalContext);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  // console.log(id);
  const postDetail = data.filter((post) => post.id == id);
  //  console.log(postDetail)

  return (
    <div div className="container my-5">
      {postDetail.map((post, id) => (
        <div className="container my-5">
          <div className="d-block" key={id}>
            <h2>{post?.title}</h2>
            <div className="d-flex detailInf">
              <div>
                <div className="detailIcon">
                  <IoTodayOutline size={16}></IoTodayOutline>
                  {post?.date}
                </div>
                <div className="detailIcon">
                  <GoClock size={16}></GoClock>
                  {post?.time}
                </div>
                <div className="detailIcon">
                  <Link to={`/location/${post.location}`}>
                    <IoLocationOutline size={16}></IoLocationOutline>
                    {post.location}
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
          {postDetail && (
            <div className="imgBanner detailContainer">
              <img src={post?.img?.banner} alt="" />
              <div className="my-4 p-2 summary ">
                <h3>Etkinlik Detayları</h3>
                <div>
                  <span className="s2">Açıklama:</span>
                  <span>{post?.sum} </span>
                </div>
                <div className="s2  ">
                  {post.actors.length > 0 ? (
                    <span className="s2">Oyuncular:</span>
                  ) : (
                    ""
                  )}
                  {post?.actors.map((actor) => (
                    <span className="d-inline-block mx-1 f" key={actor}>
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="ticket">
            <div>{post?.date}</div>
            <div> {post?.time}</div>
            <div>
              <p>
                <Link to={`/location/${post.location}`}>{post?.location}</Link>
              </p>
            </div>
            {!post.rate ? (
              <p className="rate">Ücretsiz</p>
            ) : (
              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  Bilet Al
                </button>
                <ul class="dropdown-menu">
                  {post.rate.map((item) => (
                    <li key={item}>
                      <Link class="dropdown-item" href="#">
                        {Object.keys(item)} : {Object.values(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
      <Button className="  btn-secondary  " onClick={() => setShow(!show)}>
        Haritada Göster
      </Button>
      {show ? <EventMap></EventMap> : ""}
      <div className="notice">
        <h2>Etkinlik Kuralları</h2>
        <span>-18 yaş sınırı vardır.</span>
        <span>
          -Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi telefondan
          göstermeniz gerekmektedir.
        </span>
        <span>
          {" "}
          -Organizatör firma, misafirlere rahatça eğlenebilecekleri bir ortam
          sunabilmek için mekan girişinde uygun görmediği kişileri kapıda bilet
          iadesi yaparak içeri almama hakkına sahiptir.
        </span>
      </div>
    </div>
  );
};

export default DetailPage;
