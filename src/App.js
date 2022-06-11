import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Main />
    </BrowserRouter>
  );
}

export default App;