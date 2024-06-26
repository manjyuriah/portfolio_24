import './Projects.scss';
import { useState } from 'react';

function Projects() {
  const [explain,setExplain]=useState([
    'PC용과 미디어 쿼리를 사용한 Mobile용, 두가지 버전으로 만든 룰렛 게임.\n랜덤 함수를 이용해 회전각도를 적용한 이벤트 페이지',
    '고객전용 이벤트 페이지. 상품 홍보 뿐만아니라 트래픽 증가 효과를 볼 수 있도록 만든 게임 페이지',
    '기존 OCN 사이트를 리뉴얼 한 팀프로젝트',
    '다양한 배너 효과와 원스톱 쇼핑 형태로 제작한 팀프로젝트 페이지.\n PC용 웹 사이트를 기반으로 개인작업한 모바일 페이지',
    '동적 웹 쇼핑몰을 제작하기 위한 관리자 페이지로 배너,FAQ,NOTICE,회원관리,상품등록 등 다양한 기능 사용가능.\n 모든 페이지는 백엔드와 함께 제작했으며 My-Sql을 이용해 데이터를 저장',
    '관리자페이지를 통해 데이터를 파서하여 제작한 메인페이지.\n 로그인,회원가입,결제시스템까지 적용한 쇼핑몰로 데이터베이스를 통해 가입된 고객정보를 확인후 실제 로그인이 가능하도록 제작',
    '외부에서 제작된 디자인 및 퍼블리싱을 기획서에 맞춰 전면 수정 및 재구성',
    '메인페이지1개, 서브페이지3개로 이루어진 팀프로젝트. Q&A는 입력 후 백엔드로 전달되어 자동으로 JSON이 파싱되도록 제작',
  ])
  const [hash,setHash]=useState([
    '#HTML #CSS #Jquery',
    '#HTML #CSS #Javascript #Jquery',
    '#HTML #CSS #Jquery #Javascript #JSON',
    '#HTML #CSS #Javascript #Jquery #Ajax #Json',
    '#HTML #CSS #Javascript #Jquery #Ajax #Json',
    '#HTML #CSS #SCSS #Javascript #Jquery #Ajax #JSON',
    '#HTML #CSS #SCSS #Javascript #Jquery #Ajax #Json #Vue',
    '#HTML #CSS #SCSS #Javascript #Jquery #Ajax #Json',
  ])

  const [number,setNumber]=useState(0)
  function mobile1(){
    window.open('http://juju970128.dothome.co.kr/portfolio/event/mindex.html', '', 'width=414, height=896','_blank')
  }
  function mobile2(){
    window.open('http://juju970128.dothome.co.kr/middle/index.html', '', 'width=414, height=896','_blank')
  }
  function mobile3(){
    window.open('http://juju970128.dothome.co.kr/test1/final_mshop/index.html', '', 'width=414, height=896','_blank')
  }
  return (
      <>
      <div className="projects-container">
        <div className="projects-box">
          <div className="title">Projects</div>
          {/* 포폴페이지 프리뷰 */}
          <div className="preview">
                <img src={require("../assets/pc.png")} alt="pc"/>
                <img src={require("../assets/mobile.png")} alt="mobile"/>
                <div className="pc_preview">
                  {/* 포폴 웹페이지 */}
                  {
                  number === 0
                  ?<a href="http://juju970128.dothome.co.kr/portfolio/event/index.html" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="roullete" />
                  </a>
                  :null
                  }
                  {
                  number === 1
                  ?<a href="http://juju970128.dothome.co.kr/portfolio/event/picture.html" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="puzzle"/>
                  </a>
                  :null
                  }
                  {
                  number === 2
                  ?<a href="http://juju970128.dothome.co.kr/green504c/" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="ocn"/>
                  </a>
                  :null
                  }
                  {
                  number === 3
                  ?<a href="http://juju970128.dothome.co.kr/public_html/index.html" target="_blank">
                    <img src={require(`../assets/thum${number}.PNG`)} alt="hellopet"/>
                  </a>
                  :null
                  }
                  {
                  number === 4
                  ?<a href="http://juju970128.dothome.co.kr/portfolio/shop/admin/" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="shopadmin"/>
                  </a>
                  :null
                  }
                  {
                  number === 5
                  ?<a href="http://juju970128.dothome.co.kr/portfolio/shop/index.html" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="shopmain"/>
                  </a>
                  :null
                  }
                  {
                  number === 7
                  ?<a href="http://juju970128.dothome.co.kr/light_test/" target="_blank">
                    <img src={require(`../assets/thum${number}.png`)} alt="lights"/>
                  </a>
                  :null
                  }
                </div>
                {/* 포폴 모바일 */}
                <div className='m_preview'>
                  {
                  number === 0
                  ?<img src={require(`../assets/thum_m${number}.png`)} alt="roullete" onClick={mobile1}/>
                  :null
                  }
                  {
                  number === 3
                  ?<img src={require(`../assets/thum_m${number}.png`)} alt="hellopet" onClick={mobile2}/>
                  :null
                  }
                  {
                  number === 6
                  ?<img src={require(`../assets/thum_m${number}.png`)} alt="minimal" onClick={mobile3}/>
                  :null
                  }
                </div>
              
                <div className="explain">{explain[number]}</div>
                <div className="hashtag">{hash[number]}</div>
          </div>
          {/* 포폴페이지 목록 및 설명 */}
          <ul className="list">
            <li>
              <div className='left' onClick={()=>setNumber(0)}>
                <div>01</div>
                <div className="line">룰렛게임 (PC/Mobile)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(1)}>
              <div>02</div>
              <div className="line">숨은 그림 찾기 (PC)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(2)}>
              <div>03</div>
              <div className="line">OCN 페이지 (PC)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(3)}>
              <div>04</div>
              <div className="line">Hello Pet (PC/Mobile)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(4)}>
              <div>05</div>
              <div className="line">한우사랑 관리자 페이지 (PC)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(5)}>
              <div>06</div>
              <div className="line">한우사랑 메인 페이지 (PC)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(6)}>
              <div>07</div>
              <div className="line">의류 쇼핑몰 (Mobile)</div>
              </div>
            </li>
            <li>
            <div className='left' onClick={()=>setNumber(7)}>
              <div>08</div>
              <div className="line">조명 사이트 (PC)</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </>
      
  );
}

export default Projects;
