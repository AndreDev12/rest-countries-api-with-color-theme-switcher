import useFetch from "../hooks/useFetch";

const CountryList = () => {
  const data = useFetch();
  console.log(data);

  return (
    <div className="content">
    {
      data.map( country => ( 
        <div 
          className="country"
          key={country.population}
        >
          <figure>
            <img src={country.flags.png} alt={country.flags.png}/>
          </figure>
          <div className="country-information">
            <h2 className="country-name">{country.name.common}</h2>
            <div>
              <p>Population: <span>{country.population}</span></p>
              <p>Region: <span>{country.region}</span></p>
              <p>Capital: <span>{country.capital?country.capital[0]:''}</span></p>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default CountryList;