import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useAPI(url) {
    const [data,setData]=useState();
    const [loading,setLoading]=useState();
    const [error,setError]=useState();
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          try {
            const resp = await axios.get(url);
            const data2 = await resp?.data;
            setData(data2);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [url]);
      return {loading,data,error}
    };

export default useAPI
