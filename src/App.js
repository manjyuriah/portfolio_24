import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import React, { useEffect, useState } from 'react';

//페이지 스크롤 이벤트
//0 , 921 , 1824
const App = () => {
  const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  }


  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
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
