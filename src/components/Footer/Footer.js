import "./Footer.scss";
import twitter from "../../assets/icons/twitter.png";
import insta from "../../assets/icons/insta.png";
import facebook from "../../assets/icons/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <h3 className="footer__title">Provogue</h3>
        <div className="footer__links">
          <p className="footer__text">ABOUT</p>
          <p className="footer__text">HELP</p>
          <p className="footer__text">POLICY</p>
          <p className="footer__text">CONTACT</p>
        </div>
      </div>
      <div className="sub__footer">
        <p className="sub__subtext">© 2024 Provogue. All rights reserved.</p>
        <div className="sub__icons">
          <img src={facebook} alt="facebook" className="sub__icon" />
          <img src={twitter} alt="twitter" className="sub__icon" />
          <img src={insta} alt="insta" className="sub__icon " />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
