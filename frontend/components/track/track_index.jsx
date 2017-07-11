import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let path = this.props.match.path
    if (path === '/') {
      this.props.fetchTracks();
    } else if (path === '/70s') {
      this.props.fetch70sTracks();;
    } else if (path === '/80s') {
      this.props.fetch80sTracks();
    } else if (path === '/90s') {
      this.props.fetch90sTracks();
    } else if (path === '/00s') {
      this.props.fetch00sTracks();
    } else if (path === '/10s') {
      this.props.fetch10sTracks();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.tracks.length > 10) {
      this.props.fetchTracks();
    }
  }

  render() {
    const trackLis = this.props.tracks.map((track, index) => {
      let topThree;
      let metadataDiv;

      if (index < 3) {
        topThree = "track-index-link-top";
        metadataDiv = (
          <div className="track-index-list-metadata-top">
          <h1>{track.title}</h1>
          <h2>{track.artist}</h2>
          </div>
        );
      } else {
        topThree = "track-index-link-bottom";
        metadataDiv = (
          <div className="track-index-list-metadata-bottom">
          <h1>{track.title} by {track.artist}</h1>
          </div>
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
            <div className="track-index-genre-dummy"></div>
            <ul className="track-index-genre-list">
              <li><NavLink activeClassName="active" className="genre-nav" exact to="/">ALL DECADES</NavLink></li>
              <li><NavLink activeClassName="active" className="genre-nav" to="/70s">70s</NavLink></li>
              <li><NavLink activeClassName="active" className="genre-nav" to="/80s">80s</NavLink></li>
              <li><NavLink activeClassName="active" className="genre-nav" to="/90s">90s</NavLink></li>
              <li><NavLink activeClassName="active" className="genre-nav" to="/00s">00s</NavLink></li>
              <li><NavLink activeClassName="active" className="genre-nav" to="/10s">10s</NavLink></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <div className="loader"></div>
      );
    }
  }
}

export default TrackIndex;
