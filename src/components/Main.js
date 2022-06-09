import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CountryList from './CountryList';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const Main = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    country: ""
  });
  const [first, setFirst] = useState([]);

  const handleChange = (e) => {
    setInput({
      country: e.target.value
    });
  }

  const { country } = input;

  useEffect(() => {
   
    const getUser = async() => {
      try{
        if(country){
          const url = `https://restcountries.com/v2/name/${country}`;
          const response = await axios.get(url);
          const result = await response.data;
          setFirst(result);
        }
      }catch(error){
        console.error(error);
      }
    }
    getUser();
  }, [input])

  const data = useFetch();


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
              onChange={handleChange}
              autoComplete="off"
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
        <CountryList 
          data={ data }
          first={ first }
        />
      </div>
    </main>
  )
}

export default Main;