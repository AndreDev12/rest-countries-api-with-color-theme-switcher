import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import useAxios from '../hooks/useAxios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

const CountryDetail = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { data } = useAxios();
  const { theme } = useContext(ThemeContext);

  if(!data.length) return;
  let result = data.filter(country => country.name === countryId)[0];
  const { flags:{ png }, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = result;

  return (
    <main className="main-country-detail" id={theme}>
        <div className="container animate__animated animate__fadeIn">
            <button 
              className="return-home"
              onClick={() => navigate("/countries")}
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span className="return">Back</span>
            </button>
            <div className="details-country">
              <img 
                className="flag"    
                src={png}
                alt={name}
              />
              <div className="data">
                <h2 className="details-country-name">{name}</h2>
                <div className="details-features">
                  <ul className="primary">
                    <li className="details-feature">native name: <span className="span">{nativeName}</span></li>
                    <li className="details-feature">population: <span className="span">{population.toLocaleString('en-US')}</span></li>
                    <li className="details-feature">region: <span className="span">{region}</span></li>
                    <li className="details-feature">sub region: <span className="span">{subregion}</span></li>
                    <li className="details-feature">capital: <span className="span">{capital}</span></li>
                  </ul>
                  <ul className="secondary">
                    <li className="details-feature">top level domain: <span className="span">{topLevelDomain[0]}</span></li>
                    <li className="details-feature">currencies: <span className="span">{currencies && currencies[0].name}</span></li>
                    <li className="details-feature">languages: <span className="span">{languages.map( language => ( language.name )).join(', ')}</span></li>
                  </ul>
                </div>
                {
                  borders && (
                    <div className="border-countries">
                      <span className="span">border countries:</span>
                      <div className="borders">
                        { 
                          borders?.map((border) => (
                            <Link 
                              className="border"
                              key={border}
                              to={`/countries`}
                            >{border}</Link>
                          ))
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
        </div>
    </main>
  )
}

export default CountryDetail;