import React, { useRef, useContext } from 'react';
import { WrapperCountry } from './styled';
import { contextCountry } from '../../context/CountryContext'
import { Link } from 'react-router-dom';

const Country = ({ image, name, population, region, capital }) => {

  const refCountry = useRef();
  const { detailCountryId } = useContext(contextCountry);

  const detailCountry = () => detailCountryId(refCountry.current.id);

  return (
    <Link to='/detailCountry' className="link">
      <WrapperCountry id={name} onClick={detailCountry} ref={refCountry}>
        <img src={image} alt={name} />
        <ul>
          <h2>{name}</h2>
          <li><strong>Population</strong>: {population}</li>
          <li><strong>Region</strong>: {region}</li>
          <li><strong>Capital</strong>: {capital}</li>
        </ul>
      </WrapperCountry>
    </Link>
  );
};

export default Country;
