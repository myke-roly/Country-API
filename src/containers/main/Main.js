import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {
  WrapperMain,
  WrapperForm,
  Input,
  WrapperSelect,
  Select
} from './styled';
import Countries from '../../components/countries/Countries';
import DetailCountry from '../../components/detailCountry/DetailCountry';
import { contextCountry } from '../../context/CountryContext';

const Main = ({ theme }) => {
  const [name, setName] = useState('');
  const { filterCoountry } = useContext(contextCountry);

  const showCountry = e => {
    e.preventDefault();
    if (!name) return;
    filterCoountry('name/', name);
    setName('');
  };

  return (
    <WrapperMain theme={theme}>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <WrapperForm>
                <Input>
                  <form onSubmit={showCountry}>
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                    <input
                      type="text"
                      placeholder="Search for a country..."
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </form>
                </Input>
                <WrapperSelect>
                  <Select
                    onChange={e => filterCoountry('region/', e.target.value)}
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

            </Route>
            <Route path="/detailCountry">
              <DetailCountry />
            </Route>
          </Switch>
        </Router>
      </div>
    </WrapperMain>
  );
};

export default Main;
