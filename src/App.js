import { useRef } from 'react';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

import './styles/App.scss';

function App() {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const languageRef = useRef(null);

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
      scrollToLanguage={()=> onScrollToSection(languageRef)}

      />
      <div ref={aboutMeRef}>
      <AboutMe/>
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={languageRef}>
        <Languages />
      </div>
    </div>
  );
}

export default App;
