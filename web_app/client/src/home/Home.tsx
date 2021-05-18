import {Component} from 'react';
import {Link} from 'react-router-dom';
import peterPic from '../icons/Peter.jpeg';
import adamPic from '../icons/Adam.jpeg';

export class Home extends Component {
  render() {
    return (
      <div className="mainBody" id="homeBody">
        <p id="welcomeTo">Welcome to</p>
        <p id="adamAndPeter">Adam and Peter's</p>
        <p id="socialMediaSite">Social Media site</p>
        <img src = {adamPic} id="adamPic" />
        <img src = {peterPic} id="peterPic" />
        <p id="proceed">Proceed to the <Link to="/feed">feed</Link> to get started.</p>
      </div>
    );
  }
}
