import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const anno = this.props.currentAnno;
    let top;
    if (this.props.currentAnnoHeight) {
      top = this.props.currentAnnoHeight;
    } else {
      top = 'auto';
    }
    
    if (this.props.currentAnnoHeight) {
      return(
        <section className="annotation-box" style={{top: top}}>
          <h2>SweetSixteens Annotation</h2>
          <p>{anno.body}</p>
        </section>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Annotation;
