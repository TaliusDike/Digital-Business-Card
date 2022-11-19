import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div class="social-container">
        <a href="https://facebook.com/taliusdike" className="facebook-social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>

      <div class="social-container">
        <a
          href="https://www.twitter.com/taliusdike_"
          className="twitter-social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      <div class="social-container">
        <a
          href="https://www.instagram.com/taliusdike"
          className="instagram-social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>

      <div class="social-container">
        <a href="https://www.github.com/taliusdike" className="github-social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
