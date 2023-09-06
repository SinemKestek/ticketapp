import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div className="footerContainer">
          <div className="footerLink">
            <span>Hakkımızda</span>
            <ul>
              <li>Biz Kimiz?</li>
              <li>Bize Ulaşın</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className="footerLink">
            <span>Yardım Edelim</span>
            <ul>
              <li>Yardım/SSS</li>
              <li>Etkinlik Katılım </li>
              <li>Hesabım</li>
            </ul>
          </div>
          <div className="footerLink">
            <span>Yardım Edelim</span>
            <ul>
              <li>Yardım/SSS</li>
              <li>Etkinlik Katılım </li>
              <li>Hesabım</li>
            </ul>
          </div>
        </div>
        <div className="footerContainer">
          <p>Get Connected with us on social networks</p>

          <div className="socialIcons">
            <div>
              <FiInstagram size={20}></FiInstagram>
            </div>
            <div>
              <FiTwitter size={20}></FiTwitter>
            </div>
            <div>
              <FiFacebook size={20}></FiFacebook>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
