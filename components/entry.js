import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import AppContainer from './app'
import {render} from 'react-dom'
import ShowUserTracks from './showUserTracks'
import { Router, hashHistory, Route, IndexRoute } from 'react-router';



const routes = (

    <Route path = '/'  component={AppContainer} >

      <Route path = '/showUserTracks/:id'  component={ShowUserTracks} />
    </Route>


)

render(
  <Provider store={store}>
    <Router history={hashHistory} routes= {routes} />
  </Provider>,
  document.getElementById('root')
);
