import React, {useContext} from "react"; // useContext를 import 합니다.
import {useParams, useHistory} from "react-router-dom";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext"; // StyleContext를 import 합니다.
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
    <div className="project-detail-main" style={{backgroundColor: theme.body}}>
      {/* Header와 Footer에는 props로 전달해야 할 수도 있습니다. */}
      <Header theme={theme} setTheme={changeTheme} />
      <div className="project-detail-container">
        <h1 className="project-detail-title" style={{color: theme.text}}>
          {project.projectDesc.split("-")[0]}
        </h1>
        
        <div className="project-image-container">
          <img src={project.image} alt={project.projectDesc.split("-")[0]} className="project-detail-image" />
        </div>

        <p
          className="project-detail-long-description"
          style={{color: theme.secondaryText}}
        >
          {project.longDescription}
        </p>

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
      <Footer theme={theme} />
    </div>
  );
}