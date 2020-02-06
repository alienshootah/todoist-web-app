import React, {useState} from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';


export const App = ({ darkModeDefaul = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefaul);
  
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main 
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header 
            darkmode={darkMode} 
            setDarkMode={setDarkMode}
          />
          <Content />
          </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
};

