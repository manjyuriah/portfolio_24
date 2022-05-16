import './Projects.scss';
import { useState } from 'react';

function Projects() {
  const [explain,setExplain]=useState([
    'PC 웹 버전과 미디어 쿼리를 사용한 Mobile버전으로 만든 룰렛 게임.\n랜덤 함수를 이용해 룰렛 해당 수치에 맞춰 회전각도를 적용한 이벤트 페이지',
    '고객전용 이벤트 페이지로, 상품 홍보 뿐만아니라 트래픽 증가 효과를 볼 수 있도록 만든 게임 페이지',
    '기존 OCN 사이트를 리뉴얼 한 팀프로젝트',
    '다양한 배너 효과를 적용한 사이트로 원스톱 쇼핑 형태로 제작한 팀프로젝트.\n PC용 웹 사이트를 기반으로 개인작업한 모바일 전용 페이지',
    '동적 웹 쇼핑몰을 제작하기 위한 관리자 페이지로 배너,FAQ,NOTICE,회원관리,상품등록 등 다양한 기능을 사용할 수 있도록 제작.\n 모든 페이지는 백엔드와 함께 제작하였으며 My-Sql을 이용해 데이터를 저장',
    '관리자페이지를 통한 모든 데이터를 파서하여 제작한 메인페이지.\n 로그인,회원가입 뿐만아니라 결제시스템까지 적용한 쇼핑몰로 데이터베이스를 통해 가입된 고객정보를 확인후 실제 로그인이 가능하도록 제작',
    '외부에서 제작된 디자인 및 퍼블리싱을 기획서에 맞춰 전면 수정 및 재 구성하는 형태로 제작',
    '메인페이지1개, 서브페이지3개로 이루어진 팀 프로젝트. Q&A는 입력 후 백엔드로 전달되어 자동으로 JSON이 파싱되도록 제작',
  ])
  const [number,setNumber]=useState(0)
  return (
      <>
      <div className="projects-container">
        <div className="projects-box">
          <div className="title">Projects</div>
          {/* 포폴페이지 프리뷰 */}
          <div className="preview">
                <img src={require("../assets/pc.png")} alt="pc"/>
                <img src={require("../assets/mobile.png")} alt="mobile"/>
                <div className="explain">{explain[number]}</div>
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
