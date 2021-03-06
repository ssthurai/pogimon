import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return(
      <Provider store={store}>
        <Router routes={routes} history={history} />
      </Provider>
    );
  }
}

export default Root;
