import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async() => {
    try{
      const response = await axios.get('https://restcountries.com/v2/all');
      const result = await response.data;
      setState(result)
      // console.log(result);
    }catch(error){
      console.error(error);
      //   console.log(new Error());
    }
  }

  return state;
}

export default useFetch;