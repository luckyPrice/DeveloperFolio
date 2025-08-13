import React, {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import ProjectDetail from "../containers/projectDetail/ProjectDetail";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          // 👇 (3/4) BrowserRouter로 전체를 감싸서 라우팅 기능을 활성화.
          <BrowserRouter>
            <Header />
            {/* 👇 (4/4) URL 경로에 따라 다른 화면을 보여주도록 Switch와 Route를 사용합니다. */}
            <Switch>
              {/* 기본 경로("/")일 때 기존의 메인 페이지를 보여줍니다. */}
              <Route path="/" exact>
                <Greeting />
                <Skills />
                <StackProgress />
                {/* <Education /> */}
                {/* <WorkExperience /> */}
                <StartupProject />
                <Blogs />
                <Projects />
                <Achievement />
                {/* <Talks /> */}
                {/* <Twitter />
                <Podcast /> */}
                <Profile />
              </Route>
              
              {/* "/projects/:url" 경로일 때 ProjectDetail 컴포넌트만 보여줍니다. */}
              <Route path="/projects/:url">
                <ProjectDetail />
              </Route>
            </Switch>
            {/* Footer와 ScrollToTopButton은 모든 페이지에 공통으로 보이게 Switch 밖에 둡니다. */}
            {/* <Footer /> */}
            <ScrollToTopButton />
          </BrowserRouter>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
