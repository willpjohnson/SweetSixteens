import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(e) {

  }

  render() {
    const anno = this.props.currentAnno;
    if (anno) {
      let top = this.props.currentAnnoHeight;
      return(
        <div className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
          {anno.body}
          <CommentContainer commentableId={anno.id} commentableType="Annotation"/>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
