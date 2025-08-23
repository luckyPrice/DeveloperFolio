import React, {useContext} from "react"; // useContext를 import 합니다.
import {useParams, useHistory} from "react-router-dom";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext"; // StyleContext를 import 합니다.
import Button from "../../components/button/Button";
import "./ProjectDetail.scss";

export default function ProjectDetail(props) { // props는 이제 Header/Footer를 위해 필요합니다.
  // 👇 StyleContext에서 직접 isDark와 changeTheme 값을 가져옵니다.
  const {isDark, changeTheme} = useContext(StyleContext);
  const {url} = useParams();
  const history = useHistory();

  const project = bigProjects.projects.find(p => p.url === url);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }
  
  // 👇 isDark 값을 기반으로 theme 객체를 직접 생성합니다.
  const theme = {
    isDark: isDark,
    changeTheme: changeTheme,
    // Button 컴포넌트가 필요로 할 수 있는 추가적인 스타일 값들
    text: isDark ? "#fff" : "#000",
    secondaryText: isDark ? "#c5c5c5" : "#606060",
    body: isDark ? "#1d1d1d" : "#fbfbfb" 
  };

  return (
      <div className="project-detail-container">
        

        {/* 1. 페이지의 메인 제목과 부제목 */}
        <h1 className="project-detail-title" style={{color: theme.text}}>
          {project.title}
        </h1>
        <p className="project-detail-subtitle" style={{color: theme.secondaryText}}>
          {project.subtitle}
        </p>

        {/* 2. 자유롭게 배치되는 동적 콘텐츠 영역 */}
        <div className="content-wrapper">
          {project.content.map((item, index) => {
            switch (item.type) {
              case 'image':
                return (
                  <img
                    key={index}
                    src={item.value}
                    alt={`${project.title} content ${index}`}
                    className="content-image" // 이미지 스타일을 위한 클래스
                  />
                );
              case 'subtitle':
                return (
                  <h2 key={index} className="content-subtitle" style={{color: theme.text}}>
                    {item.value}
                  </h2>
                );
              case 'heading': 
              return (
                <h3 key={index} className="content-heading" style={{color: theme.text}}>
                    {item.value}
                </h3>
              );
              case 'text':
                return (
                  <p key={index} className="content-text" style={{color: theme.secondaryText}}>
                    {item.value}
                  </p>
                );
              default:
                return null;
            }
          })}
        </div>

        <div className="project-detail-links">
           {/* portfolio.js의 footerLink 배열을 사용하여 버튼을 렌더링합니다. */}
          {project.footerLink?.map((link, i) => (
             <Button
                key={i}
                text={link.name}
                newTab={true}
                href={link.url}
                theme={theme}
              />
          ))}
        </div>

        <Button
          text="< 돌아가기"
          onClick={() => history.goBack()}
          theme={theme}
        />
      </div>
  );
}