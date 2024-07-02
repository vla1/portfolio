import { useRef } from 'react';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

import './styles/App.scss';

function App() {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);

  const onScrollToSection = (sectionRef) => {
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div className="App">
      <Navbar
      scrollToAbout={()=> onScrollToSection(aboutMeRef)}
      scrollToProject={()=> onScrollToSection(projectRef)}
      />
      <div className='app-aboutMe-container' ref={aboutMeRef}>
      <AboutMe/>
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
