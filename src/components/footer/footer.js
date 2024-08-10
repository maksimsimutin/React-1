import React from "react";
import style from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.block1}>
          <ul className={style.listUnstyled}>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Privacy-Policy</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Watch List</a>
            </li>
          </ul>
          <div className={style.text}>
            © 2023 WATCHIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </div>
        </div>
        <div className={style.block2}>
          <div className={style.blockTitle}>Follow Us:</div>
          <ul className={style.listInline}>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
            </li>
          </ul>
        </div>
        <div className={style.block3}>
          <div className={style.blockTitle}>Watchit App</div>
          <div className={style.payImg}>
            <a href="/">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Google Play"
              />
            </a>
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/256px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
