import CountryListItem from './CountryListItem';

const CountryList = ({data, state}) => {

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