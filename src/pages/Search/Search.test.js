import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import Loader from 'react-loader-spinner';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

describe('Search', () => {
  it('should render loading spinner', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );
    expect(wrapper.exists()).toBeTruthy();
    expect(
      wrapper.contains(
        <Loader type="TailSpin" color="#00BFFF" height={200} width={200} timeout={5000} className="" visible={true} />,
      ),
    ).toBeTruthy();
  });

  it('should render results if fetch is allowed to complete and rate limit is not exceeded', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );

    setTimeout(() => {
      wrapper.update();
      if (store.getState().repos.error === 'API Rate Limit Exceeded') {
        expect(store.getState().repos.error).toBe('API Rate Limit Exceeded');
      } else {
        expect(store.getState().repos.repos).toHaveLength(10);
      }
      done();
    }, 1000);
  });
});
