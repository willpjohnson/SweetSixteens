import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const trackLis = this.props.tracks.map((track, index) => {
      let topThree;
      let metadataDiv;

      if (index < 3) {
        topThree = "track-index-link-top";
        metadataDiv = (
          <div className="track-index-list-metadata">
            <h1>{track.title}</h1>
            <h2>{track.artist}</h2>
          </div>
        );
      } else {
        topThree = "track-index-link-bottom";
        metadataDiv = (
          <h1>{track.title} by {track.artist}</h1>
        );
      }

      return(
        <li key={index}>
          <Link className={topThree} to={`/tracks/${track.id}`}>
            <h3><div>{index+1}</div></h3>
            <img src={track.image_url}></img>
            {metadataDiv}
          </Link>
        </li>
      );
    });

    if (this.props.tracks) {
      return(
        <div className="track-index-div">
          <div className="track-index-list-div">
            <h2>TOP SONGS</h2>
            <ul className="track-index-list">
              {trackLis}
            </ul>
          </div>
          <div className="track-index-genre-div">

          </div>
        </div>
      );
    } else {
      return(
        <h1>Loading</h1>
      );
    }
  }
}

export default TrackIndex;
