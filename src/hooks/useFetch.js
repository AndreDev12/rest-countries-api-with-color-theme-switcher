import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState({
    data: [],
    loading: false,
    error: false
  });
  const { data, loading, error } = state;
  const [inputCountry, setInputCountry] = useState({
    country: ""
  });
  const [region, setRegion] = useState("");
  const { country } = inputCountry;

  useEffect(() => {
    const searchCountries = async() => {
      try{
        setState({
          ...state,
          loading: true
        })
        const url = "https://restcountries.com/v2/all";
        const response = await axios.get(url);
        const data = await response.data;
        setState({
          ...state,
          data
        })
      }catch(e){
        console.error(e);
      }
    }
    searchCountries();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const searchCountryName = async() => {
      try{
        if(country){
          const url = `https://restcountries.com/v2/name/${country}`;
          const response = await axios.get(url);
          const data = await response.data;
          setState({
            ...state,
            data
          });
        }
      }catch(error){
        console.error(error);  
        // setState({
        //   data: [],
        //   error: true,
        //   loading: false
        // })
      }
    }
    searchCountryName();
  }, [country, state])

  useEffect(() => {
    const searchRegion = async() => {
      try{
        if(region === "all"){
          const url = "https://restcountries.com/v2/all";
          const response = await axios.get(url);
          const result = await response.data;
          setState(result);
          return;
        }
        if(region){
          const url = `https://restcountries.com/v2/region/${region}`;
          const response = await axios.get(url);
          const result = await response.data;
          setState(result);
        }
      }catch(e){
        console.error(e);
      }
    }
    searchRegion();
  }, [region])
  
  const handleChange = ({target}) => {
    setInputCountry({
      country: target.value
    });
  }

  const handleClick = name => {
    setRegion(name);
  }

  return {
    data,
    loading,
    error,
    country,
    handleChange,
    handleClick
  };
}

export default useFetch;