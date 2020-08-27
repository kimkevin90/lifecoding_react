import React, { Component } from 'react';
//app.css의 디자인을 app component에 넣는다.
import './App.css';
import Toc from './components/TOC'
import Subject from './components/Content'


//어떤 컴포넌트가 실행될때 render()보다 먼저 실행이되면서 그 컴포넌트를 초기화 하고싶은 코드는
//constructor 안에다가 코드를 작성한다. 즉 컴포넌트가 실행될떄 constructor가 제일 먼저 실행되면서 초기화를 담당한다.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'web', sub: 'world wide web' }
    }
  }
  render() {
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        >
        </Subject>
        <Subject title="react" sub="for ui"></Subject>
        <Toc></Toc>
      </div>
    );
  }
}

export default App;
