import React from 'react';
import { WrapperCountry } from './styled';

const Country = ({ image, name, population, region, capital }) => {
  return (
    <WrapperCountry>
      <img src={image} alt={name} />
      <ul>
        <h2>{name}</h2>
        <li><strong>Population</strong>: {population}</li>
        <li><strong>Region</strong>: {region}</li>
        <li><strong>Capital</strong>: {capital}</li>
      </ul>
    </WrapperCountry>
  );
};

export default Country;
