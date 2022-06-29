import { createContext, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import CountryDetail from './components/CountryDetail';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme( curr => curr === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/countries" element={<Main />} />
            <Route path="/countries/:countryId" element={<CountryDetail />} />
            <Route path="*" element={<Navigate to="/countries" />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;