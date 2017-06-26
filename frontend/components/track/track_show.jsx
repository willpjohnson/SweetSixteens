import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import AnnotationContainer from '../annotation/annotation_container';
import Lyrics from './lyrics';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.trackId);
    this.props.fetchAnnotations(this.props.trackId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackId !== this.props.trackId) {
      this.props.fetchTrack(nextProps.trackId);
      this.props.fetchAnnotations(nextProps.trackId);
    }
  }

  render() {
    const track = this.props.track;
    if (track.id === this.props.trackId) {
      return(
        <div className="track-show-div">
          <div className="track-show-banner">
            <div className="track-show-background-cover" />
            <div className="track-show-blur-overflow">
              <img className="track-show-background" src={track.image_url}></img>
            </div>

            <div className="track-show-info-div">
              <img className="track-image" src={track.image_url}></img>
              <div className="track-show-info-metadata">
                <h1>{track.title}</h1>
                <h2>{track.artist}</h2>
              </div>
            </div>
          </div>

          <div className="track-show-lyrics-and-annotations-div">
            <div className="track-show-lyrics-div">
              <Lyrics trackId={track.id} anno={this.props.anno}
                lyrics={track.body} fetchAnnotation={this.props.fetchAnnotation}
              />
            </div>

            <div className="track-show-annotations-div">
              <AnnotationContainer trackId={track.id}/>
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
