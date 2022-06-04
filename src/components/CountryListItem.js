const CountryListItem = ({ country }) => {
  return (
    <div 
        className="country"
    >
        <button className="link">
            <img 
                className="flag"    
                src={country.flags.png}
                alt={country.name.common}
            />
        </button>
        <div className="information">
            <h2 className="name">{country.name.common}</h2>
            <ul className="features">
              <li className="feature">Population: <span className="span">{country.population}</span></li>
              <li className="feature">Region: <span className="span">{country.region}</span></li>
              <li className="feature">Capital: <span className="span">{country.capital&&country.capital[0]}</span></li>
            </ul>
        </div>
    </div>
  )
}

export default CountryListItem;