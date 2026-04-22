import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import MaintenanceScreen from './components/MaintenanceScreen';
import portfolioData from './portfolio-data.json';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Portfolio isDark={isDark} toggleTheme={toggleTheme} />
      {portfolioData.isMaintenanceMode && <MaintenanceScreen />}
    </>
  );
}

export default App;
