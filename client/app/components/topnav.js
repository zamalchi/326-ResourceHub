import React from 'react';
import {ResetDatabase} from '../database';
import {Link} from 'react-router';
import {getStudentClassNames} from '../server';


export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allClasses: [], currentClasses: []};
  }

  componentDidMount() {
    getStudentClassNames(1, (classNames) => {
      this.setState({currentClasses: classNames});
    });
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand logo">
              <img src="img/qq.png" className="img-circle pic-color" alt="Cinque Terre" width="75" height="55"/>
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navbar" aria-expanded="false">
            <ul className="nav navbar-nav list-inline nav-left">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Courses <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  {this.props.allClasses.map(function(listValue){
                    return <li key={listValue.id}><a href={"/#/course/" + listValue}>{listValue}</a></li>;
                  })}
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Current Classes <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">

                  {this.state.currentClasses.map(function(listValue){
                    return <li key={listValue.id}><a href={"/#/course/" + listValue.id}>{listValue.name}</a></li>;
                  })}
                </ul>
              </li>
              <li>
                <ResetDatabase />
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right list-inline">
              <li>
                <div className="dropdown navbar-btn class">
                  <button className="btn btn-primary dropdown-toggle userImg" type="button" data-toggle="dropdown">
                    <img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="30" height="30"/> </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#/profile"><span  className="glyphicon glyphicon-user"></span> Profile</a>
                    </li>
                    <li>
                      <a href="#/profileDiscussion"><span  className="glyphicon glyphicon-comment"></span> Active Discussions</a>
                    </li>
                    <li>
                      <a href="#/profile"><span  className="glyphicon glyphicon-eye-open"></span> Account Overview</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown navbar-btn class">
                  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    <span className="glyphicon glyphicon-cog"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="##"><span  className="glyphicon glyphicon-home"></span> Log-Out </a>
                    </li>
                    <li>
                      <a href="##"><span  className="glyphicon glyphicon-cog"></span> Account Settings </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
