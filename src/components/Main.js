import './Main.scss';
import KakaoQR from './KakaoQR';
import React, { useEffect, useState } from 'react';

function Main(props) {

  const [openkakao, setOenkakao] = useState(false);
  function kakoOpen(){
      setOenkakao(!openkakao);
  };

//페이지 스크롤 이벤트
//0 , 921 , 1824
  const handleAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const handleSkills = () => {
    window.scrollTo({
      top: 921,
      behavior: "smooth"
    });
  }

  const handleProjects = () => {
    window.scrollTo({
      top: 1824,
      behavior: "smooth"
    });
  }

  return (
      <>
      <div className="main-container">
        <ul className="nav">
          <li onClick={handleAbout}>About</li>
          <li onClick={handleSkills}>Skills</li>
          <li onClick={handleProjects}>Projects</li>
        </ul>
        <div className="main-box">
            <div className="hello">
              Hello World! :)
            </div>
            <div className="intro">
              My Name is <span className="strong">Kim Min Joo.</span> I'm <span className="strong">Front-end Developer</span> based in Seoul.
            </div>
            <div className="email">juju970128@naver.com</div>
                {
                  openkakao === true
                  ?<KakaoQR />
                  :null
                }
            <div className="social">
              <ul>
                <li>
                  <a href={'https://velog.io/@minkim'} target="_blank">
                    <img src={require("../assets/velog.png")} alt="Kim Min Joo Blog" />
                  </a>
                </li>
                <li onClick={kakoOpen}>
                    <img src={require("../assets/kakaoicon.png")}  alt="Kim Min Joo kakao" />                    
                </li>
                <li>
                  <a href={'https://github.com/manjyuriah'} target="_blank">
                    <img src={require("../assets/github.png")}  alt="Kim Min Joo Github" />
                  </a>
                </li>
                </ul>
            </div>
        </div>
      </div>
      </>
      
  );
}

export default Main;
