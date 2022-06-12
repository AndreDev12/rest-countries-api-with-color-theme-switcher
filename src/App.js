import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryId" element={<CountryDetail />} />
          <Route path="*" element={<Navigate to="/countries" />} />
      </Routes>
    </Router>
  );
}

export default App;