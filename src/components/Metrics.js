import { React, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDataFromApi } from '../redux/metric-redux';

const Metrics = () => {
  const listing = useSelector((state) => state.metricsReducer, shallowEqual);

  const dispatch = useDispatch();

  const countryDetails = (id) => {
    // dispatch(reserveRocket(id));
  };

  useEffect(() => {
    if (listing.length === 0) {
      getDataFromApi(dispatch);
    }
  }, [dispatch]);

  return (
    <div className="rocket">
      <div>
        <h1>AFRICA</h1>
        <span>The heart of hope</span>
      </div>
      <ul className="rocket-align">
        {listing.map((country) => (
          <li className="display" key={country.id}>
            <NavLink className="active-link" to={`/countryDetails/${country.id}`}>
              <div>
                <h2>{country.shortName}</h2>
                <span>{country.capital}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Metrics;