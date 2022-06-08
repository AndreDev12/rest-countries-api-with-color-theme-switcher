import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    getUser();
  }, [])
  let result;

  const getUser = async() => {
    try{
      const url = "https://restcountries.com/v2/all";
      const response = await axios.get(url);
      result = await response.data;
      setState(result);
      // setState({
      //   data: result,
      //   loading: true
      // })
      // console.log(result);
    }catch(error){
      console.error(error);
      //   console.log(new Error());
    }
  }

  return result;
}

export default useFetch;
// https://restcountries.com/v2/name/{name}
// https://restcountries.com/v2/all