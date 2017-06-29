import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import AnnotationContainer from '../annotation/annotation_container';
import Lyrics from './lyrics';
import CommentContainer from '../comment/comment_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStartIdx: null,
      selectionEndIdx: null,
      displayForm: false,
      annoInput: ""
    };

    this.deleteError = "";

    this.handleDelete = this.handleDelete.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.exitForm = this.exitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.trackId);
    // this.props.fetchAnnotations(this.props.trackId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackId !== this.props.trackId) {
      this.props.fetchTrack(nextProps.trackId);
      // this.props.fetchAnnotations(nextProps.trackId);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.trackId);
    this.props.history.push('/');
  }

  updateSelection(start, end) {
    this.setState({selectionStartIdx: start, selectionEndIdx: end, displayForm: true});
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
  }

  exitForm() {
    this.setState({displayForm: false});
  }

  annotationArea() {
    let annotationArea;
    if (this.state.displayForm) {
      let top = this.props.currentAnnoHeight;
      console.log(top);
      annotationArea = (
        <div className="annotation-form-div" style={{top: top}}>
          <form onSubmit={this.handleSubmit} className="annotation-form">
            <textarea value={this.state.annoInput} onChange={this.update()} className="annotation-form-input" placeholder="Write your own annotation..."/>
            <button>Save</button>
          </form>
          <button onClick={this.exitForm}>Exit</button>
        </div>
      );
    } else {
      annotationArea = (
        <AnnotationContainer trackId={this.props.track.id}/>
      );
    }
    return annotationArea;
  }

  render() {
    const track = this.props.track;
    let deleteButton;
    if(this.props.track && this.props.currentUser && this.props.currentUser.id === this.props.track.author_id) {
      deleteButton = <button className="track-show-info-delete"onClick={this.handleDelete}>DELETE</button>;
    } else {
      deleteButton = <div></div>;
    }

    if (track) {
      return(
        <div className="track-show-div">
          <div className="track-show-banner">
            <div className="track-show-background-cover"></div>
            <div className="track-show-blur-overflow">
              <img className="track-show-background" src={track.image_url}></img>
            </div>

            <div className="track-show-info-div">
              <img className="track-image" src={track.image_url}></img>
              <div className="track-show-info-metadata">
                <h1>{track.title}</h1>
                <h2>{track.artist}</h2>
                {deleteButton}
              </div>
            </div>
          </div>


          <div className="track-show-lyrics-and-annotations-div">
            <div className="track-show-lyrics-div">
              <Lyrics trackId={track.id} anno={this.props.anno}
                lyrics={track.body} updateSelection={this.updateSelection}
                fetchAnnotation={this.props.fetchAnnotation}
                receiveAnnotation={this.props.receiveAnnotation}
                receiveHeight={this.props.receiveHeight}
              />
              <CommentContainer commentableId={track.id} commentableType="Track"/>
            </div>

            <div className="track-show-annotations-div">
              {this.annotationArea()}
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
