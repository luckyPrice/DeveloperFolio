import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // 'PUSH'는 사용자가 새로운 링크를 클릭해서 페이지를 이동했을 때의 동작입니다.
    // 'POP'은 사용자가 브라우저의 '뒤로가기' 또는 '앞으로가기' 버튼을 눌렀을 때의 동작입니다.
    // 따라서 새로운 페이지로 이동했을 때만 스크롤을 맨 위로 올립니다.
    if (history.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, history.action]); // history.action도 의존성 배열에 추가

  return null;
}