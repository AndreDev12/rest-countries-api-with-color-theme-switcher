import { Link } from 'react-router-dom';

const CountryListItem = ({ country }) => {
  return (
    <Link 
        to={`/countries/${country.name}`}
        className="home-country"
    >
        <button className="link">
            <img 
                className="flag"    
                src={country.flags.png}
                alt={country.name}
            />
        </button>
        <div className="information">
            <h3 className="home-country-name">{country.name}</h3>
            <ul className="home-features">
              <li className="home-feature">Population: <span className="span">{country.population.toLocaleString('en-US')}</span></li>
              <li className="home-feature">Region: <span className="span">{country.region}</span></li>
              <li className="home-feature">Capital: <span className="span">{country.capital}</span></li>
            </ul>
        </div>
    </Link>
  )
}

export default CountryListItem;