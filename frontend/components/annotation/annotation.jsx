import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(e) {

  }

  render() {
    let enterComment;
    if (this.props.currentUser) {
      enterComment = (
        <form onSubmit={this.handleSubmitComment}>
          <textarea placeholder="Write your comment here..."/>
          <button>Submit</button>
        </form>
      );
    } else {
      enterComment = <div></div>;
    }
    const anno = this.props.currentAnno;
    if (anno) {
      let top = this.props.currentAnnoHeight;
      return(
        <div className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
           {anno.body}

          <div className="annotatoin-comment-div">
            {enterComment}
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
