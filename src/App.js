import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import { useState } from 'react';
import { useEffect } from 'react';


  
function App() {
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }
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
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
