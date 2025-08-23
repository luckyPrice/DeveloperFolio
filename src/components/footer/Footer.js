import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("🐺🐯🐺 SANG WOON's porfolio 🐺🐯🐺")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Made by{" "}
          <a
            href="https://velog.io/@luckyprice1103/posts"
            target="_blank"
            rel="noreferrer"
          >
            AN SANG WOON
          </a>
        </p>
      </div>
    </Fade>
  );
}
