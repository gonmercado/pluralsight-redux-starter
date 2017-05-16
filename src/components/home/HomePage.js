import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>Restct, reasdflads sdflasdkfasd lfa.sdf asdf.asdf </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
