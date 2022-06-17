import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);
  const [inputCountry, setInputCountry] = useState({
    country: ""
  });
  const [region, setRegion] = useState("");
  const { country } = inputCountry;

  useEffect(() => {
    const getCountries = async() => {
      try{
        const url = "https://restcountries.com/v2/all";
        const response = await axios.get(url);
        const result = await response.data;
        setState(result);
      }catch(e){
        console.error(e);
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

  useEffect(() => {
    const getRegion = async() => {
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
    getRegion();
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
    state,
    handleChange,
    country,
    handleClick
  };
}

export default useFetch;