import React, { Component } from 'react';
//app.css의 디자인을 app component에 넣는다.
import './App.css';

class Subject extends Component {
  render() {
    return (

      <header>
        <h1> web</h1>
        world wide web
      </header>

    )
  }
}


class Toc extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}


class Shopping extends Component {
  render() {
    return (
      <header>

        <button class="btn colorBtn blue" data-key="color" data-value="blue">Blue</button>
        <button class="btn colorBtn yellow" data-key="color" data-value="yellow">Yellow</button>
        <button class="btn colorBtn pink" data-key="color" data-value="pink">Pink</button>

      </header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Shopping></Shopping>
      </div>
    );
  }
}

export default App;
