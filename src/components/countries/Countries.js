import React, {useContext} from 'react';
import { WrapperCountries } from './styled';
import Country from '../country/Country';
import {contextCountry} from '../../context/CountryContext';

const Countries = () => {

  const {country} = useContext(contextCountry);

  return (
    <WrapperCountries>
      {country.data.map(country => (
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
