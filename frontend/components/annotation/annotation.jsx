import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const anno = this.props.currentAnno;

    if (this.props.currentAnnoHeight) {
      let top = this.props.currentAnnoHeight;
      return(
        <div className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
           {anno.body}
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
