import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataFromApi } from '../redux/metric-redux';

const CountryDetails = () => {
  const listing = useSelector((state) => state.metricsReducer);
  const { id } = useParams();
  console.log(typeof(id));

  const dispatch = useDispatch();

  const details = listing.filter((country) => { return country.id === Number(id) });
  console.log(details);

  useEffect(() => {
    if (listing.length === 0) {
      getDataFromApi(dispatch);
    }
  }, [dispatch]);

  return (
    <div className="rocket">
      {details.map((crt) => {
        return (
          <table>
            <tr key={1}>
              <td className="my-profil-mission">{crt.shortName}</td>
            </tr>
            <tr key={2}>
              <td className="my-profil-mission">{crt.fullName}</td>
            </tr>
            <tr key={3}>
              <td className="my-profil-mission">{crt.currencyName}</td>
            </tr>
            <tr key={4}>
              <td className="my-profil-mission">{crt.currencySymbol}</td>
            </tr>
            <tr key={5}>
              <td className="my-profil-mission">{crt.capital}</td>
            </tr>
            <tr key={6}>
              <td className="my-profil-mission">{crt.subregion}</td>
            </tr>
            <tr key={7}>
              <td className="my-profil-mission">{crt.languages}</td>
            </tr>
            <tr key={8}>
              <td className="my-profil-mission">{crt.population}</td>
            </tr>
            <tr key={9}>
              <td className="my-profil-mission">{crt.fifa}</td>
            </tr>
            <tr key={10}>
              <td className="my-profil-mission">{crt.carSigns}</td>
            </tr>
            <tr key={11}>
              <td className="my-profil-mission">{crt.carSide}</td>
            </tr>
            <tr key={12}>
              <td className="my-profil-mission">{crt.timezones}</td>
            </tr>
            <tr key={13}>
              <td className="my-profil-mission">{crt.continents}</td>
            </tr>
            <tr key={14}>
              <td className="my-profil-mission">{crt.flags}</td>
            </tr>
            <tr key={15}>
              <td className="my-profil-mission">{crt.coatOfArms}</td>
            </tr>
            <tr key={16}>
              <td className="my-profil-mission">{crt.startOfWeek}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default CountryDetails;