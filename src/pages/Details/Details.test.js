import React from 'react';
import { mount, shallow } from 'enzyme';
import Details from './Details';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import Loader from 'react-loader-spinner';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

describe('Details', () => {
  it('should render loading spinner', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Details
            location={{
              query: {
                owner: 'keroserene',
                title: 'rickrollrc',
              },
            }}
          />
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

  it('should render the error component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Details
            location={{
              query: {
                owner: 'keroserene',
                title: 'rickrollrc',
              },
            }}
            repos={{
              error: 'There has been an error',
            }}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(wrapper.find('There has been an error')).toBeTruthy();
  });

  it('should render markdown on the details page after loading is complete if rate limit is not exceeded', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Details
            location={{
              query: {
                owner: 'keroserene',
                title: 'rickrollrc',
              },
            }}
          />
        </BrowserRouter>
      </Provider>,
    );
    setTimeout(() => {
      wrapper.update();
      if (store.getState().repos.error === 'API Rate Limit Exceeded') {
        expect(store.getState().repos.error).toBe('API Rate Limit Exceeded');
      } else {
        expect(store.getState().repos.markdown).toBeTruthy();
      }
      done();
    }, 1000);
  });
});
