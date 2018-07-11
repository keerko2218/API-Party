import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import './Pokemon.css'
import SpotifyDetails from './SpotifyDetails'

class Spotify extends Component {
  state = {
    music: '',
  }

  handleChange = ev => {
    this.setState({ music: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/spotify/${this.state.music}`)
  }

  render() {
    return (
      <div className="Spotify">
        <h1>Music</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              type="text"
              value={this.state.music}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Music
            </button>
          </div>
        </form>

        <Route
          path="/spotify/:spotify"
          component={SpotifyDetails}
        />
      </div>
    )
  }
}

export default Spotify