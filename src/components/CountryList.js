import PropTypes from 'prop-types';
import CountryListItem from './CountryListItem';

const CountryList = ({data, loading}) => {
  
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

CountryList.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default CountryList;