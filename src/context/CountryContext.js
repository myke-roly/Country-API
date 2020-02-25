import React, {useState} from 'react';
import { useFetch } from '../hooks/useFetch';

export const contextCountry = React.createContext();
contextCountry.displayName = 'Country-Context';

const CountryContext = props => {

  //detail country
  const [detail, setDetail] = useState('');
  const detailCountry = useFetch(`https://restcountries.eu/rest/v2/name/${detail}`);

  const detailCountryId = (id) => setDetail(id);

  // all countries
  const [filter, setFilter] = useState('');
  const [filterName, setFilterName] = useState('');
  
  const {data} = useFetch(`https://restcountries.eu/rest/v2/${filter}${filterName}`);
  
  const filterCoountry = (name, fil) => {
    setFilter(name);
    setFilterName(fil);
  };

  return (
    <contextCountry.Provider value={{
      data,
      filterCoountry,
      detailCountry,
      detailCountryId
    }}>
      {props.children}
    </contextCountry.Provider>
  );
};

export default CountryContext;
