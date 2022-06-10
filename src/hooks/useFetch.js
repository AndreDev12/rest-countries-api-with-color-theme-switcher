import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);

  const [input, setInput] = useState({
    country: ""
  });
  
  const handleChange = (e) => {
    setInput({
      country: e.target.value
    });
  }
  const { country } = input;

  useEffect(() => {
   
    const getUser = async() => { 
      try{
        if(country){
          const url = `https://restcountries.com/v2/name/${country}`;
          const response = await axios.get(url);
          const result = await response.data;
          // setFirst(result);
          setState(result);
        }
      }catch(e){
        console.log(e);
        // if(error.response.data.status === 404){
        //   console.log(JSON.parse(error.response.request.response))
        // }
        // return;
        // throw new Error(error);
      }
    }
    getUser();
  }, [country])

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async() => {
    try{
      const url = "https://restcountries.com/v2/all";
      const response = await axios.get(url);
      const result = await response.data;
      setState(result);
    }catch(error){
      console.error(error);
      //   console.log(new Error());
    }
  }

  return {
    state,
    handleChange,
    country
  };
}

export default useFetch;