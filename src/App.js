import ThemeProvider from './context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/countries" element={<Main />} />
            <Route path="/countries/:countryId" element={<CountryDetail />} />
            <Route path="*" element={<Navigate to="/countries" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;