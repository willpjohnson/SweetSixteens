import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteAnno = this.handleDeleteAnno.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleDeleteAnno(e) {
    e.preventDefault();
    const annoId = this.props.currentAnno.id;
    this.props.deleteAnnotation(annoId);
  }

  handleUpvote(e) {
    e.preventDefault();
    this.vote(1);
  }

  handleDownvote(e) {
    e.preventDefault();
    this.vote(-1);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.unselectAnnotation();
  }

  vote(value) {
    if (this.props.currentUser) {
      const votable_id = this.props.currentAnno.id;
      const votable_type = "Annotation";
      const user_id = this.props.currentUser.id;
      const vote = {
        votable_id, votable_type, user_id, value
      };

      if (this.props.currentUser.votes.Annotation[votable_id]) {
        const oldVote = this.props.currentUser.votes.Annotation[votable_id];
        this.props.deleteVote(oldVote);
      } else {
        this.props.createVote(vote);
      }
    }
  }

  iconConditionals() {
    const currentUser = this.props.currentUser;
    const anno = this.props.currentAnno;
    let currentUserVote;
    if (currentUser && currentUser.votes.Annotation[anno.id]) currentUserVote = currentUser.votes.Annotation[anno.id];


    // TRASH ICON CONDITIONALS
    let deleteIcon;
    if(currentUser && anno.author_id === currentUser.id) {
      deleteIcon = (
        <i onClick={this.handleDeleteAnno} className="fa fa-trash-o" aria-hidden="true"></i>
      );
    } else {
      deleteIcon = <div></div>;
    }
    // THUMBS UP ICON CONDITIONALS
    let thumbsUpClass = "icon-thumbs-up";
    if (currentUserVote && currentUserVote.value === 1) {
      thumbsUpClass = "icon-thumbs-up upvoted";
    }
    // THUMBS DOWN ICON CONDITIONALS
    let thumbsDownClass = "icon-thumbs-down";
    if (currentUserVote && currentUserVote.value === -1) {
      thumbsDownClass = "icon-thumbs-down downvoted";
    }
    // SCORE CONDITIONALS
    let scoreClass;
    if (anno.score < 0) {
      scoreClass = "icon-vote-score-negative";
    } else {
      scoreClass = "icon-vote-score-positive";
    }
    let score;

    return({ deleteIcon, thumbsUpClass, thumbsDownClass, scoreClass });
  }

  render() {
    const anno = this.props.currentAnno;
    if (anno) {
      let top = this.props.currentAnnoHeight;
      let icons = this.iconConditionals();

      return(
        <div className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
          {anno.body}
          <div className="icon-div">
            <section className={icons.thumbsUpClass}><i onClick={this.handleUpvote} className="fa fa-thumbs-o-up" aria-hidden="true"></i></section>
            <section className={icons.scoreClass}>{anno.score}</section>
            <section className={icons.thumbsDownClass}><i onClick={this.handleDownvote} className="fa fa-thumbs-o-down" aria-hidden="true"></i></section>
            <section className="icon-trash">{icons.deleteIcon}</section>
          </div>
          <p className="annotation-exit-button" onClick={this.handleExit}><i className="fa fa-times" aria-hidden="true"></i></p>
          <CommentContainer commentableId={anno.id} commentableType="Annotation"/>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
