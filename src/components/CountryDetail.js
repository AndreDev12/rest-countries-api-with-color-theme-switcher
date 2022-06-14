import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { state } = useFetch();
  let result;

  if(state.length){
    result = state.filter(country => country.name === countryId)[0];
  }

  return (
    <main className="main-country-detail">
        <div className="container">
            <button 
              className="return-home"
              onClick={() => {navigate("/countries")}}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="return">Back</span>
            </button>
            <div className="country">
              <img 
                className="flag"    
                src={result?.flags.png}
                alt={result?.name}
              />
              <div className="data">
                <h2 className="name">{result?.name}</h2>
                <div className="features">
                  <ul className="main">
                    <li className="feature">native name: <span className="span">{result?.nativeName}</span></li>
                    <li className="feature">population: <span className="span">{result?.population.toLocaleString('en-US')}</span></li>
                    <li className="feature">region: <span className="span">{result?.region}</span></li>
                    <li className="feature">sub region: <span className="span">{result?.subregion}</span></li>
                    <li className="feature">capital: <span className="span">{result?.subregion}</span></li>
                  </ul>
                  <ul className="secondary">
                    <li className="feature">top level domain: <span className="span">{result?.topLevelDomain[0]}</span></li>
                    <li className="feature">currencies: <span className="span">{result?.currencies[0].name}</span></li>
                    <li className="feature">languages: <span className="span">{result?.languages.map(lenguaje => (lenguaje.name))}</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default CountryDetail;