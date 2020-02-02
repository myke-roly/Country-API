import React, { useContext } from 'react';
import { WrapperCountries } from './styled';
import Country from '../country/Country';
import {contextCountry} from '../../context/CountryContext';

const Countries = () => {

  const {data, filterCoountry} = useContext(contextCountry);
  //filterCoountry('all/', null);
  if(data.length === 0)  return <p>Loading...</p>;

  return (
    <WrapperCountries>
      {data.map(country => (
        <Country
          key={country.alpha3Code}
          image={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </WrapperCountries>
  );
};

export default Countries;
