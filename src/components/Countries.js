import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CountryList from './CountryList';
import useFetch from '../hooks/useFetch';

const Countries = () => {
  const [show, setShow] = useState(false);
  const {state, handleChange, country, handleClick} = useFetch();

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
              autoComplete="off"
              name="country"
              onChange={handleChange}
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
              <ul 
                className="region-list"
                onClick={handleClick}
              >
                <li onClick={handleClick} name="region" className="region">Africa</li>
                <li name="region" className="region">America</li>
                <li name="region" className="region">Asia</li>
                <li name="region" className="region">Europe</li>
                <li name="region" className="region">Oceania</li>
              </ul>
            </div>
          </button>
        </div>
        <CountryList 
          state={state}
        />
      </div>
    </main>
  )
}

export default Countries;