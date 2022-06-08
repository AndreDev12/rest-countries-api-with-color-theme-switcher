import { useState, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CountryList from './CountryList';
import reducer from '../reducer/reducer';
import useFetch from '../hooks/useFetch';

const Main = () => {
  const [show, setShow] = useState(false);
  // const [first, setFirst] = useState({
  //   country: ""
  // });

  // const handleChange = (e) => {
  //   setFirst({
  //     country: e.target.value
  //   })
  //   console.log(e.target.value);
  // }
  // let data;
  // const { country } = first;
  // useEffect(() => {
  //   data = useFetch(`https://restcountries.com/v2/name/${country}`);
  // }, [country])
  
  // console.log(`https://restcountries.com/v2/name/${country}`);

  const data = useFetch();
  console.log(data);
  const initialState = data;
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(){
    dispatch({type: 'search_country'});
  }

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
              // value={country}
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
          state={ state }
          // handleChange={ handleChange }
        />
      </div>
    </main>
  )
}

export default Main;