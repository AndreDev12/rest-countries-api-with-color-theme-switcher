import CountryListItem from './CountryListItem';

const CountryList = ({ data, first }) => {
  // console.log(data);
  return (
    <div className="content">
    {
      first.map( country => ( 
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