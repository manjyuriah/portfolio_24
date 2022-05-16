import './Main.scss';
import KakaoQR from './KakaoQR';
import {MdClose} from 'react-icons/md'
import React, {useState} from 'react';

function Main() {
  const [openkakao, setOenkakao] = useState(false);
  function kakoOpen(){
      setOenkakao(!openkakao);
  };
  return (
      <>
      <div className="main-container">
        <ul className="nav">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
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
