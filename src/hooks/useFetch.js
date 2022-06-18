import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);
  const [inputCountry, setInputCountry] = useState({
    country: ""
  });
  const [region, setRegion] = useState("");
  const [code, setCode] = useState("");
  const { country } = inputCountry;
  const [first, setFirst] = useState("");

  useEffect(() => {
    const searchCountries = async() => {
      try{
        const url = "https://restcountries.com/v2/all";
        const response = await axios.get(url);
        const result = await response.data;
        setState(result);
      }catch(e){
        console.error(e);
      }
    }
    searchCountries();
  }, [])

  useEffect(() => {
    const searchCountryName = async() => {
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
    searchCountryName();
  }, [country])

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

  useEffect(() => {
    const searchByCountryCode = async() => {
      try {
        if(code){
          const url = `https://restcountries.com/v2/alpha/${code}`;
          const response = await axios.get(url);
          const result= await response.data;
          // setState(result);
          // console.log(name);
          // setInputCountry(name);
          // console.log(result);
          setFirst(result.name);
          console.log(result.name);
        }
      } catch (e) {
        console.error(e);
      }
    }
    searchByCountryCode();
  }, [code])
  
  const handleChange = ({target}) => {
    setInputCountry({
      country: target.value
    });
  }

  const handleClick = name => {
    setRegion(name);
  }

  const handleCode = (border) => {
    setCode(border)
  }

  return {
    state,
    country,
    handleChange,
    handleClick,
    handleCode, 
    first
  };
}

export default useFetch;