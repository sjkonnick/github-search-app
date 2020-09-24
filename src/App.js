import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navigation from './components/Navigation';
import Search from './pages/Search';
import Details from './pages/Details';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={Search} />
          <Route path="/details" exact component={Details} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
