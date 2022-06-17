import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CountryList from './CountryList';
import useFetch from '../hooks/useFetch';

const Countries = () => {
  const [show, setShow] = useState(false);
  const {state, handleChange, country, handleClick} = useFetch();

  const regions = [
    {label: "All", name: "all"},
    {label: "Africa", name: "africa"},
    {label: "Americas", name: "americas"},
    {label: "Asia", name: "asia"},
    {label: "Europe", name: "europe"},
    {label: "Oceania", name: "oceania"}
  ];

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
            {
              show && 
              <div className="regions" data-visible={show}>
                <ul 
                  className="region-list"
                >
                  {
                    regions.map( region => (
                      <li
                        onClick={() => handleClick(region.name)}
                        className="region"
                        key={region.label}
                        value={region.name}
                      >{region.label}</li>
                    ))
                  }
                </ul>
              </div> 
            }
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