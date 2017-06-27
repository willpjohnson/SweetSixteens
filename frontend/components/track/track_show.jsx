import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import AnnotationContainer from '../annotation/annotation_container';
import Lyrics from './lyrics';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStartIdx: null,
      selectionEndIdx: null,
      formClass: "annotation-form-div hidden",
      annoInput: ""
    };

    window.trackstate = this.state;

    this.updateSelection = this.updateSelection.bind(this);
    this.exitForm = this.exitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  updateSelection(start, end) {
    this.setState({selectionStartIdx: start, selectionEndIdx: end, formClass: "annotation-form-div"});
  }

  update() {
    return e => {
      this.setState({annoInput: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const annotation = {
      track_id: this.props.trackId,
      author_id: this.props.currentUser.id,
      body: this.state.annoInput,
      start_idx: this.state.selectionStartIdx,
      end_idx: this.state.selectionEndIdx
    };
    this.props.createAnnotation(annotation);
    this.setState({annoInput: ""});
    this.exitForm();
    this.props.fetchAnnotations(this.props.trackId);
  }

  exitForm() {
    this.setState({formClass: "annotation-form-div hidden"});
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
                lyrics={track.body} updateSelection={this.updateSelection}
                fetchAnnotation={this.props.fetchAnnotation}
              />
            </div>

            <div className="track-show-annotations-div">
              <AnnotationContainer trackId={track.id}/>
              <div className={this.state.formClass}>
                <form onSubmit={this.handleSubmit} className="annotation-form">
                  <textarea value={this.state.annoInput} onChange={this.update()} className="annotation-form-input" placeholder="Write your own annotation..."/>
                  <button>Save</button>
                </form>
                <button onClick={this.exitForm}>Exit</button>
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
