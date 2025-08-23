import React from "react";
import "./Button.scss";

// 1. props로 onClick을 받을 수 있도록 추가합니다.
export default function Button({ text, className, href, newTab, onClick }) {

  // 2. 만약 href(링크 주소) prop이 전달되었다면, <a> 태그를 반환합니다.
  if (href) {
    return (
      <a
        className={`main-button ${className || ""}`} // 공통 스타일 클래스
        href={href}
        target={newTab ? "_blank" : ""}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        {text}
      </a>
    );
  }

  // 3. href가 없다면, onClick 이벤트를 처리하는 <button> 태그를 반환합니다.
  return (
    <button
      className={`main-button ${className || ""}`} // 공통 스타일 클래스
      onClick={onClick}
    >
      {text}
    </button>
  );
}