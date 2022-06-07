import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CountryList from './CountryList';

const Main = () => {
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState({
    country: ""
  });

  const handleClick = (e) => {
    setFirst({
      country: e.target.value
    })
    // console.log(e.target.value);
  }

  const {country} = first;
  // https://restcountries.com/v2/name/{country}

  return (
    <main className="main">
      <div className="container">
        <div className="flex">
          <form className="form">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input 
              type="text"
              placeholder="Search for a country..."
              className="search-country"
              name="country"
              onChange={handleClick}
              value={country}
            />
          </form>
          <button 
            className="region-filter"
            onClick={() => setShow(!show)}  
          >
            <span className="theme-name">Filter by region</span>
            <FontAwesomeIcon icon={faAngleDown} /> 
            <div className="regions" data-visible={show}>
              <ul className="region-list">
                <li className="region">Africa</li>
                <li className="region">America</li>
                <li className="region">Asia</li>
                <li className="region">Europe</li>
                <li className="region">Oceania</li>
              </ul>
            </div>
          </button>
        </div>
        <CountryList />
      </div>
    </main>
  )
}

export default Main;