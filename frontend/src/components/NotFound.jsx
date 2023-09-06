import React from "react";
import "../styles/found.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notFound">
      <div className="content">
        <p>Sonuç için üzgünüz..İlerleyen zamanlar da tekrar bakabilirsin</p>
        <Link to="/">
          {" "}
          <button className="btn">Diğer Etkinlikleri Gör</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
