import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {WrapperDetail, Back} from './styled';

import { contextCountry } from '../../context/CountryContext';

export default () => {
  const { detailCountry, filterCoountry } = useContext(contextCountry);
  if (detailCountry.data.lenght === 0) return;

  return (
    <>
      <Link to="/" className='link'>
        <Back className="fas fa-arrow-left"> Back</Back>
      </Link>
      {detailCountry.data.map(country => (
        <WrapperDetail key={country.name}>
          <div><img src={country.flag} alt={country.name} /></div>
          <div className="section-right">
            <h1>{country.name}</h1>
            <section>
              <div className="left">
                <p><strong>Native Name</strong>: {country.nativeName}</p>
                <p><strong>Population</strong>: {country.population}</p>
                <p><strong>Region</strong>: {country.region}</p>
                <p><strong>Sub Region</strong>: {country.subregion}</p>
                <p><strong>Capital</strong>: {country.capital}</p>
              </div>
              <div>
                <p><strong>Top Level Domain</strong>: {country.topLevelDomain}</p>
                <p><strong>Currencies</strong>: {country.currencies[0].name}</p>
                <strong>Languages</strong>: {country.languages.map(language => <span key={language.name}> { language.name} </span>)}
              </div>
            </section>
            <div className="languages">
              <strong>Border Countries</strong>: 
              {country.borders.map(border => <button className="btn" key={border}>{border}</button>)}
            </div>
          </div>
        </WrapperDetail>
      ))}
    </>
  );
};
