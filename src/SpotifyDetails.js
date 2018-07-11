import React, { Component } from 'react'

class SpotifyDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      music: {},
      error: null,
    }

    this.fetchMusicData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.music !== this.props.match.params.music) {
      this.fetchMusicData()
    }
  }

  fetchMusicData = () => {
    const { music } = this.props.match.params
    fetch(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
    /${music}/`)
      .then(response => response.json())
      .then(music => this.setState({ music }))
  }

  render() {
    return (
      <div className="MusicUser">
        <h2>{this.state.music.name}</h2>
        {
          this.state.music.sprites && (
            <img
              src={this.state.music.sprites.front_default}
              alt={this.state.music.name}
            />
          )
        }
      </div>
    )
  }
}

export default SpotifyDetails