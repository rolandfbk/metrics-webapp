import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Metrics from './components/Metrics';
import CountryDetails from './components/CountryDetails';
import store from './redux/ConfigureStore';

describe('component test', () => {
  const MetricsProvider = () => (
    <Provider store={store}>
      <Metrics />
    </Provider>
  );

  const CountryDetailsProvider = () => (
    <Provider store={store}>
      <CountryDetails />
    </Provider>
  );

  it('Metrics renders correctly', () => {
    const tree = renderer.create(<MetricsProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Simulation of user click on Morocco', () => {
    const tree = renderer.create(<CountryDetailsProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
