import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if(response.status !== 200) return;
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [url]);

  return { data };
};
