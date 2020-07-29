import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>
          Take or upload a picture and this shitty pokedex might tell you which pokemon it is!
        </p>
      </div>
    );
  }
}