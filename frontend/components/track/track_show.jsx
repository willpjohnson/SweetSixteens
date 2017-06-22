import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.trackId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackId !== this.props.trackId) {
      this.props.fetchTrack(nextProps.trackId);
    }
  }

  render() {
    if (this.props.track.id === this.props.trackId) {
      return(
        <div className="track-show-div">
          <div className="track-show-banner">
            <img className="track-show-background" src={this.props.track.image_url}></img>

            <div className="track-show-info-div">
              <img className="track-image" src={this.props.track.image_url}></img>
              <div className="track-show-info-metadata">
                <h1>{this.props.track.title}</h1>
                <h2>{this.props.track.artist}</h2>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return(
        <h1>Loading...</h1>
      );
    }
  }
}

export default TrackShow;
