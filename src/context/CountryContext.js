import React, {useState} from 'react';
import { useFetch } from '../hooks/useFetch';

export const contextCountry = React.createContext();
contextCountry.displayName = 'Country-Context';

const CountryContext = props => {
  const urlCountries = 'https://restcountries.eu/rest/v2/all';
  const countries = useFetch(urlCountries);

  const [filter, setFilter] = useState('');
  const [filterName, setFilterName] = useState('');
  
  const urlCountry = `https://restcountries.eu/rest/v2/${filter}/${filterName}`;
  const country = useFetch(urlCountry)

  const filterCoountry = (name, fil) => {
    setFilter(name);
    setFilterName(fil);
  }

  return (
    <contextCountry.Provider value={{
      countries,
      country,
      filterCoountry
    }}>
      {props.children}
    </contextCountry.Provider>
  );
};

export default CountryContext;
