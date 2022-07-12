import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {

  const [state, setState] = useState({
    data: [],
    loading: false,
  });
  const { data, loading } = state;
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
        console.log(e);
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
      }catch(e){
        // console.log(e);
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
          const data = await response.data;
          setState({
            ...state,
            data
          });
          return;
        }
        if(region){
          const url = `https://restcountries.com/v2/region/${region}`;
          const response = await axios.get(url);
          const data = await response.data;
          setState({
            ...state,
            data
          });
        }
      }catch(e){
        console.log(e);
      }
    }
    searchRegion();
  }, [region, state])
  
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
    country,
    handleChange,
    handleClick
  };
}

export default useAxios;