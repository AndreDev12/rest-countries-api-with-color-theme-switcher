import { useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    let response;
    useEffect(() => {
        async function getUser() {
            try {
              response = await axios.get('https://restcountries.com/v3.1/all');
              const result = await response.data;
              console.log(result);
            } catch (error) {
              console.error(error);
            //   console.log(new Error());
            }
        }
        getUser();
    }, [])

    return response;
}

export default useFetch;