import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteAnno = this.handleDeleteAnno.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleDeleteAnno(e) {
    e.preventDefault();
    const annoId = this.props.currentAnno.id;
    console.log(annoId, "Delete");
  }

  handleUpvote(e) {
    e.preventDefault();
    const votable_id = this.props.currentAnno.id;
    const votable_type = "Annotation";
    const user_id = this.props.currentUser.id;
    const value = 1;
    const vote = {
      votable_id, votable_type, user_id, value
    };
    this.props.createVote(vote);
  }

  handleDownvote(e) {
    e.preventDefault();
    const votable_id = this.props.currentAnno.id;
    const votable_type = "Annotation";
    const user_id = this.props.currentUser.id;
    const value = -1;
    const vote = {
      votable_id, votable_type, user_id, value
    };
    this.props.createVote(vote);
  }

  render() {
    const anno = this.props.currentAnno;
    if (anno) {
      let top = this.props.currentAnnoHeight;
      let deleteIcon;
      if(this.props.currentUser && anno.author_id === this.props.currentUser.id) {
        deleteIcon = (
          <i onClick={this.handleDeleteAnno} className="fa fa-trash-o" aria-hidden="true"></i>
        );
      } else {
        deleteIcon = <div></div>;
      }

      let scoreClass;
      if (anno.score < 0) {
        scoreClass = "icon-vote-score-negative";
      } else {
        scoreClass = "icon-vote-score-positive";
      }


      return(
        <div className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
          {anno.body}
          <div className="icon-div">
            <section className="icon-thumbs-up"><i onClick={this.handleUpvote} className="fa fa-thumbs-o-up" aria-hidden="true"></i></section>
            <section className={scoreClass}>{anno.score}</section>
            <section className="icon-thumbs-down"><i onClick={this.handleDownvote} className="fa fa-thumbs-o-down" aria-hidden="true"></i></section>
            <section className="icon-trash">{deleteIcon}</section>
          </div>

          <CommentContainer commentableId={anno.id} commentableType="Annotation"/>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
