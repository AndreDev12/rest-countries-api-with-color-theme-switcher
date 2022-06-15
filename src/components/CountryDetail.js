import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { state } = useFetch();

  if(!state.length) return;
  let result = state.filter(country => country.name === countryId)[0];
  const { flags:{ png }, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = result;

  return (
    <main className="main-country-detail">
        <div className="container">
            <button 
              className="return-home"
              onClick={() => navigate("/countries")}
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span className="return">Back</span>
            </button>
            <div className="country">
              <img 
                className="flag"    
                src={png}
                alt={name}
              />
              <div className="data">
                <h2 className="name">{name}</h2>
                <div className="features">
                  <ul className="main">
                    <li className="feature">native name: <span className="span">{nativeName}</span></li>
                    <li className="feature">population: <span className="span">{population.toLocaleString('en-US')}</span></li>
                    <li className="feature">region: <span className="span">{region}</span></li>
                    <li className="feature">sub region: <span className="span">{subregion}</span></li>
                    <li className="feature">capital: <span className="span">{capital}</span></li>
                  </ul>
                  <ul className="secondary">
                    <li className="feature">top level domain: <span className="span">{topLevelDomain[0]}</span></li>
                    <li className="feature">currencies: <span className="span">{currencies && currencies[0].name}</span></li>
                    <li className="feature">languages: <span className="span">{languages.map( language => ( language.name )).join(', ')}</span></li>
                  </ul>
                </div>
                <div className="border-countries">
                  <span className="span">border countries</span>
                  <div className="borders">
                    {
                      borders?.map((border, index) => (
                        <Link 
                          className="border"
                          key={index}
                          to={`/countries/${countryId}`}
                        >{border}</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default CountryDetail;