import "./Skills.scss";

function Skills() {
  return (
    <>
      <div className="skills-container">
        <div className="skills-box">
          <div className="title">Skills</div>
          <ul className="list">
            <li>
              <div>HTML & CSS</div>
              <div className="explain">
                디자인에 맞춰 작업이 가능하며 name,id,class의 분류를 알고 있다.
                Method에 대한 POST, GET에 대한 원리와 다양한 스타일 선언 방식을
                이해
              </div>
            </li>
            <li>
              <div>Scss</div>
              <div className="explain">
                기본적으로 전처리기로 작성하며 CSS 컴파일 가능. 코드 중복을
                최소화 하며 문법에 대한 유지보수 경험이 있다.
              </div>
            </li>
            <li>
              <div>Javascript</div>
              <div className="explain">
                함수, 메소드, 클래스,이벤트 등 다양한 응용이 가능하며, 파라미터
                데이터 활용과 함께 Back-end와의 작업 경험 풍부
              </div>
            </li>
            <li>
              <div>Jquery</div>
              <div className="explain">
                Javascript를 기본으로 하여 Jquery엔진 커스텀 경험과 플러그인 API
                사용 경험이 있다
              </div>
            </li>
            <li>
              <div>ECMA</div>
              <div className="explain">
                import와 export를 기본으로 코드를 작성하며, BOM, DOM의 확장성
                활용 가능. Class와 Module모두 사용 가능하며, fetch를 이용한 배열
                데이터를 활용
              </div>
            </li>
            <li>
              <div>Ajax</div>
              <div className="explain">
                동기,비동기 통신이 가능하며 동적 화면 출력 및 DOM, NODE 모두
                사용 가능. 기본적인 통신개념과 XML, JSON 파일에 대한 파서 개념을
                알고 있다
              </div>
            </li>
            <li>
              <div>Vue</div>
              <div className="explain">
                CDN,CLI 모두 경험이 있으며, Template과 Component 사용 가능.
                라이프 사이클을 이해하고 있으며, 각종 이벤트 함수 응용 경험
              </div>
            </li>
            <li>
              <div>Git & Github</div>
              <div className="explain">
                백엔드 및 프론트엔드와 협업 경험이 있으며, Push, Pull request
                같은 이벤트에 반응하여 자동으로 배포되는 CI/CD 경험.
              </div>
            </li>
            {/* <li>
              <div>XML & JSON</div>
              <div className="explain">
                태그와 다차원 배열에 대한 경험이 있으며, MySQL Database 값에
                대한 파싱을 통한 파서 데이터 출력도 가능
              </div>
            </li> */}
            <li>
              <div>API</div>
              <div className="explain">
                도로명 주소, 지도, 결제 시스템 등 다양한 API 경험
              </div>
            </li>
            <li>
              <div>Responsive Web</div>
              <div className="explain">
                미디어 쿼리를 이용해 화면 너비에 따라 유동적으로 레이아웃을 변화
                시킬 수 있으며, Cross Browsing 기술 플랫폼으로 제작 가능
              </div>
            </li>
            <li>
              <div>Etc</div>
              <div className="explain">
                VS Code를 사용하였으며, 관리자 페이지에 대한 적용 원리 지식과
                검색엔진에 쉽게 노출되게 SEO작업 가능
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
