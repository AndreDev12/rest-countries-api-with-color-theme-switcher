import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <main className="main">
      <div className="container flex">
        <form className="form">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input 
            type="text"
            placeholder="Search for a country..."
          />
        </form>
        <button 
          className="region-filter"
          onClick={() => setShow(!show)}  
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