import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.commentableId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.commentableId !== nextProps.commentableId) {
      this.props.fetchComments(nextProps.commentableId);
    }
  }

  handleSubmitComment(e) {
    e.preventDefault();
    let comment = {
      author_id: this.props.currentUser.id,
      commentable_id: this.props.commentableId,
      commentable_type: this.props.commentableType,
      body: this.state.body
    };
    this.props.createComment(comment);
    this.setState({body: ""});
  }

  handleDeleteComment(e) {
    e.preventDefault();
    const commentId = parseInt(e.currentTarget.id);
    this.props.deleteComment(commentId, this.props.commentableType);
  }

  update() {
    return e => {
      this.setState({body: e.currentTarget.value});
    };
  }

  timeSince(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  render() {
    const commentLis = this.props.comments.map( (comment, index) => {
      let deleteIcon;
      if(this.props.currentUser && comment.author_id === this.props.currentUser.id) {
        deleteIcon = (
          <i onClick={this.handleDeleteComment} id={comment.id} className="fa fa-trash-o" aria-hidden="true"></i>
        );
      } else {
        deleteIcon = <div></div>;
      }

      let scoreClass;
      if (comment.score < 0) {
        scoreClass = "icon-vote-score-negative";
      } else {
        scoreClass = "icon-vote-score-positive";
      }

      return(
        <li className="comment-list-item" key={index}>
          <div className="comment-posted-circumstances">
            <Link to={`/users/${comment.author_id}`}><div className="comment-author-div">
              <img src={comment.author_pic} />
              <h1>{comment.author}</h1>
            </div></Link>
            <h2>{this.timeSince(comment.created_at)}</h2>
          </div>
          {comment.body}<br />
          <div className="icon-div">
            <section className="icon-thumbs-up"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></section>
            <section className={scoreClass}>{comment.score}</section>
            <section className="icon-thumbs-down"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></section>
            <section className="icon-trash">{deleteIcon}</section>
          </div>
        </li>
      );
    });

    let enterComment;
    if (this.props.currentUser) {
      enterComment = (
        <form onSubmit={this.handleSubmitComment}>
          <textarea
            className="annotation-comment-input"
            placeholder="Write your comment here..."
            onChange={this.update()}
            value={this.state.body}
          />
          <button className="annotation-comment-input-submit">SUBMIT</button>
        </form>
      );
    } else {
      enterComment = (
        <div className="comment-not-logged-in">
          <Link to={`${this.props.location.pathname}?login=true`} className="comment-not-logged-in-html"><div>
            <h1 className="log-in-to-leave-a-comment">LOG IN TO LEAVE A COMMENT</h1>
          </div></Link>
        </div>
      );
    }

    return(
      <div className="annotation-comment-div">
        {enterComment}
        <ul className="comment-list">
          {commentLis}
        </ul>
      </div>
    );
  }
}

export default Comment;
