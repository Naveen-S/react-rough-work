import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import ref from './Ref';
import CountRenders from './CountRenders';
import useCallbackHook from './useCallbackHook';
import CustomHook from './CustomHook';
import Reverse from './Reverse';
import Pure from './Pure';
import LazySuspense from './LazySuspense';
import DatFetchSuspense from './DatFetchSuspense';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App} />
    <Route exact path='/refs' component={ref} />
    <Route exact path='/renders' component={CountRenders} />
    <Route exact path='/callback' component={useCallbackHook} />
    <Route exact path='/custom' component={CustomHook} />
    <Route
      exact
      path='/hoc'
      render={() => {
        return <Reverse value='reverse' />;
      }}
    />
    <Route exact path='/pure' component={Pure} />
    <Route exact path='/lazy' component={LazySuspense} />
    <Route exact path='/dataSuspense' component={DatFetchSuspense} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
