import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);
  const [inputCountry, setInputCountry] = useState({
    country: ""
  });
  const { country } = inputCountry;

  useEffect(() => {
    const getCountries = async() => {
      try{
        const url = "https://restcountries.com/v2/all";
        const response = await axios.get(url);
        const result = await response.data;
        setState(result);
      }catch(error){
        console.error(error);
      }
    }
    getCountries();
  }, [])

  useEffect(() => {
    const getCountry = async() => {
      try{
        if(country){
          const url = `https://restcountries.com/v2/name/${country}`;
          const response = await axios.get(url);
          const result = await response.data;
          setState(result);
        }
      }catch(e){
        console.error(e);
      }
    }
    getCountry();
  }, [country])

  const handleChange = (e) => {
    setInputCountry({
      country: e.target.value
    });
  }

  const handleClick = (e) => {
    console.log(e.target.value);
  }

  return {
    state,
    handleChange,
    country,
    handleClick
  };
}

export default useFetch;