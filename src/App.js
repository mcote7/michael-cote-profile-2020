import './App.css';
import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import ScrollProgressRead from 'react-scroll-progress-read';

import scrollTop from './components/scrollTop';
import NavBar from './components/navigation';
import TechnicalSkills from './components/technicalSkills';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Resume from './components/resume';
import Message from './components/message/message';

// import MainPage from './components/mainPage';
import MainView from './components/MainView/MainView';


class App extends Component {
  state = { message: false }
  handleMessage = () => {
    this.setState({message: true})
  };
  render() {
    return(
    <div className="App">
      <div className="container-fluid">
        <div className="myScrollBar">
          <ScrollProgressRead backgroundColor="rgba(97, 218, 251, 0.5)" barColor="cornsilk" height="0.2rem"/>
        </div>
        <div id="cote" className="row fullScreen">
          {/* <MainPage message={this.state.message}/> */}
          <MainView  message={this.state.message} />
        </div>
        <div className="row">
          <Switch>
            <Route exact path="/technical" component={TechnicalSkills}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contact" render={props=> <Message {...props} handleMessage={this.handleMessage}/>}/>
            <Route exact path="/michael-cote-profile-2020" component={scrollTop}/>
            <Redirect from="/" exact to="/michael-cote-profile-2020"/>
            <Redirect to="/michael-cote-profile-2020"/>
          </Switch>
        </div>
      </div>
      <NavBar/>
    </div>
    );
  };
};
export default App;