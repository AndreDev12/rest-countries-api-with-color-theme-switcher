import CountryListItem from './CountryListItem';

const CountryList = ({state}) => {
  console.log(state);
  return (
    <div className="content">
    {
      state.map( country => ( 
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