import { BsCheckLg } from "react-icons/bs";
import "../styles/list.scss";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const List = ({ event }) => {
  return (
    <div className="container">
      <div className=" list-menu ">
        <div className="eventTitle ">Etkinlik</div>
        <div className="eventTitle ">Mekan</div>
        <div className="eventTitle ">Tarih</div>
      </div>
      <div className="container my-4 ">
        {event.map((event) => (
          <Link to={`/detailpage/${event.id}`}>
            <div className="listWrapper" key={event.id}>
              <div className="eventInf ">
                <img src={event.img.banner} alt="" className="eventBanner" />
                <div>
                  <h5>{event.title}</h5>
                  <span className="small">Satışta</span>
                </div>
              </div>

              <div className="eventInf  ">
                <Link to={`/location/${event.location}`}>{event.location}</Link>
                <span>{event.city}</span>
              </div>
              <div className="eventInf  ">
                <p> {event.date}</p>
                <p> {event.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
