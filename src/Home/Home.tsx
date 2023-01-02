import React from 'react';
import './Home.scss';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="hero-container-main jumbotron d-flex align-items-center mb-4">
        <div className="d-flex flex-column justify-content-center container-fluid py-5">
          <h1 className="jumbotron-title display-6 fw-bold">Welcome</h1>
          <p className="jumbotron-subtitle col-md-8 fs-5">
            {"Hello, I'm a Sydney based Software Engineer"}
          </p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
