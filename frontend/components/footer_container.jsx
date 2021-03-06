import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="footer-div">
        <div className="footer-links">
          <a target="_blank" href="http://willjohnson.tech"><i className="fa fa-folder-open" aria-hidden="true"></i></a>
          <a target="_blank" href="https://github.com/willpjohnson/full_stack_project"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/william-johnson-aa560668/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a target="_blank" href="https://angel.co/william-johnson-31?public_profile=1"><i className="fa fa-angellist" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Footer));
