import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

import './App.css'
import Pokemon from './Pokemon'
import Homework from './Homework'
import Spotify from './Spotify'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </header>

        <ul className="navLinks">
          <li>
            <NavLink to="/pokemon">Pok&eacute; API</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Spotify</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/homework" component={Homework} />
          <Route path="/spotify" component={Spotify} />

          <Route render={() => (
            <p>To get started, click one of the links above.</p>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App