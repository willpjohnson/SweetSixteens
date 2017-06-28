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
