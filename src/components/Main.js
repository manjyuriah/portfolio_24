import './Main.scss';

function Main() {
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
            <ul className="social">
                <li>
                    <img src={require("../assets/velog.png")} alt="Kim Min Joo Blog" />
                </li>
                <li>
                    <img src={require("../assets/kakaoicon.png")}  alt="Kim Min Joo Instagram" />
                </li>
                <li>
                    <img src={require("../assets/github.png")}  alt="Kim Min Joo Github" />
                </li>
            </ul>
        </div>
      </div>
      </>
      
  );
}

export default Main;
