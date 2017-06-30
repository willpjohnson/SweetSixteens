import React from 'react';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      title: "",
      primaryTag: "",
      lyrics: "",
      author_id: props.currentUser.id,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleRadioChange(e) {
    this.setState({primaryTag: e.currentTarget.value});
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("track[artist]", this.state.artist);
    formData.append("track[title]", this.state.title);
    // formData.append("track[primaryTag]", this.state.primaryTag);
    formData.append("track[body]", this.state.lyrics);
    formData.append("track[author_id]", this.state.author_id);
    formData.append("track[image]", this.state.imageFile);

    this.props.createTrack(formData).then( (track) => {
      this.props.history.push(`/tracks/${track.id}`);
    });
  }

  render() {
    return(
      <div className="new-track-form-background">
        <div className="new-track-form-div">
          <h1>Add Song</h1>

          <form className="new-track-form" onSubmit={this.handleSubmit}>

            <div className="ntf-primary-info-header">
              <h2>Primary info</h2>
              <h3>*required</h3>
            </div>

            <div className="ntf-primary-info-div">
              <div className="ntf-label-div"><label>BY*<br />
                <input
                  className="ntf-input-text"
                  type="text"
                  onChange={this.update("artist")}
                  value={this.state.artist}
                  placeholder="The primary artist"
                />
              </label></div>
              <div className="ntf-label-div"><label>TITLE*<br />
                <input
                  className="ntf-input-text"
                  type="text"
                  onChange={this.update("title")}
                  value={this.state.title}
                  placeholder="Title"
                />
              </label></div>
              <div className="ntf-label-div"><label>PRIMARY TAG*<br />
                <input type="radio" value="Rap" name="ntf-radio"
                  onChange={this.handleRadioChange} checked={this.state.primaryTag === 'Rap'}/>Rap
                <input className="radio" type="radio" value="Pop" name="ntf-radio"
                  onChange={this.handleRadioChange} checked={this.state.primaryTag === 'Pop'}/>Pop
                <input className="radio" type="radio" value="Rock" name="ntf-radio"
                  onChange={this.handleRadioChange} checked={this.state.primaryTag === 'Rock'}/>Rock
                <input className="radio" type="radio" value="R&B" name="ntf-radio"
                  onChange={this.handleRadioChange} checked={this.state.primaryTag === 'R&B'}/>R&B
                <input className="radio" type="radio" value="Country" name="ntf-radio"
                  onChange={this.handleRadioChange} checked={this.state.primaryTag === 'Country'}/>Country
              </label></div>
              <div className="ntf-label-div"><label>LYRICS*<br />
                <textarea
                  className="ntf-input-text area"
                  onChange={this.update("lyrics")}
                  value={this.state.lyrics}/>
              </label></div>
            </div>

            <div className="ntf-additional-header">
              <h2>Additional data</h2>
            </div>

            <div className="ntf-additional-div">
              <div className="ntf-label-div"><label>IMAGE<br />
                  <input id="file" type="file" className="ntf-file-select" onChange={this.updateFile}/>
                  <label className="ntf-file-select-label"htmlFor="file"><h2 className="ntf-image-select-button">Choose Image</h2></label>
                </label>
                <img className="ntf-image-preview" src={this.state.imageUrl} />
              </div>
            </div>

            <button className="ntf-submit">Submit</button>
          </form>

        </div>
      </div>
    );
  }
}

export default NewTrackForm;
