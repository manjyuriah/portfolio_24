import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import React, { useEffect, useState } from 'react';

//페이지 스크롤 이벤트
//0 , 921 , 1824
function App() {
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  useEffect(() => {
    // console.log(ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY])

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }

  })

  return (
    <div className="App">
      <Main ScrollY={ScrollY}/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
