import CountryListItem from './CountryListItem';

const CountryList = ({data, loading}) => {
  // console.log(state);
  return (
    <div className={loading ? "content-block" : "content-grid"}>
    {
      loading ? <p className="loading-countries">Loading countries ...</p> :
      data?.map( country => ( 
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