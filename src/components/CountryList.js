import useFetch from '../hooks/useFetch';
import CountryListItem from './CountryListItem';

const CountryList = () => {
  const data = useFetch();
  console.log(data);

  return (
    <div className="content">
    {
      data.map( country => ( 
        <CountryListItem 
          country={ country }
          key={ country.name }
        />
      ))
    }
    </div>
  )
}

export default CountryList;