import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Main = () => {
  const [show, setShow] = useState("false");
  
  function handleClick() {
    if(show === "true"){
      setShow("false")
      return;
    }
    setShow("true");
  }

  return (
    <main className="main">
      <div className="container grid">
        <form className="form">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input 
            type="text"
            placeholder="Search for a country..."
          />
        </form>
        <button 
          className="region-filter"
          onClick={handleClick}  
        >
          <span className="theme-name">Filter by region</span>
          <FontAwesomeIcon icon={faAngleDown} /> 
          <div className="regions" data-visible={show}>
            <ul>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </button>
      </div>
    </main>
  )
}

export default Main;

// Nota: Testear "regions" debe ir dentro de "region-filter"