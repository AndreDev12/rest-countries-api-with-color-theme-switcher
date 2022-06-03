import useFetch from '../hooks/useFetch';

const CountryList = () => {
  const data = useFetch();
  console.log(data);

  return (
    <div className="content">
    {
      data.map( country => ( 
        <a 
          className="country"
          key={country.name.common}
        >
          <figure>
            <img src={country.flags.png} alt={country.name.common}/>
          </figure>
          <div className="country-information">
            <h2 className="country-name">{country.name.common}</h2>
            <ul>
              <li>Population: <span>{country.population}</span></li>
              <li>Region: <span>{country.region}</span></li>
              <li>Capital: <span>{country.capital&&country.capital[0]}</span></li>
            </ul>
          </div>
        </a>
      ))
    }
    </div>
  )
}

export default CountryList;