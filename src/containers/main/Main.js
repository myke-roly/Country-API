import React, { useContext } from 'react';
import {
  WrapperMain,
  WrapperForm,
  Input,
  WrapperSelect,
  Select
} from './styled';
import Countries from '../../components/countries/Countries';
import { contextCountry } from '../../context/CountryContext';

const Main = ({ theme }) => {
  const [name, setName] = React.useState('');
  const { filterCoountry } = useContext(contextCountry);

  return (
    <WrapperMain theme={theme}>
      <div className="container">
        <WrapperForm>
          <Input>
            <form onSubmit={e => {
              e.preventDefault()
              if (!name) return;
              filterCoountry('name', name);
              setName('');
            }}>
              <button type="submit"><i  className="fas fa-search"></i></button>
              <input
                type="text"
                placeholder="Search for a country..."
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </form>
          </Input>
          <WrapperSelect>
            <Select
              onChange={e => {
                filterCoountry('region', e.target.value);
              }}
            >
              <option>--Select Region--</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </Select>
            <i className="fas fa-arrow-down"></i>
          </WrapperSelect>
        </WrapperForm>
        <Countries />
      </div>
    </WrapperMain>
  );
};

export default Main;
