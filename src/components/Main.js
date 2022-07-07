import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import CountryList from './CountryList';
import useAxios from '../hooks/useAxios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [show, setShow] = useState(false);
  const {data, loading, handleChange, country, handleClick} = useAxios();
  const {theme} = useContext(ThemeContext);

  const regions = [
    {label: "All", name: "all"},
    {label: "Africa", name: "africa"},
    {label: "Americas", name: "americas"},
    {label: "Asia", name: "asia"},
    {label: "Europe", name: "europe"},
    {label: "Oceania", name: "oceania"}
  ];

  return (
    <main className="main" id={theme}>
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
              <div className="regions animate__animated animate__fadeIn" data-visible={show}>
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
          data={data}
          loading={loading}
        />
      </div>
    </main>
  )
}

export default Main;