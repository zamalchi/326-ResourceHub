import React from 'react';
import {Link} from 'react-router';
import {getUserName,getUserSchool} from '../server';


export default class UserDisc extends React.Component{
  render(){
    return (

      <div>
       <div className="row">
          <div className="col-md-10 col-md-offset-1 text maindiv">
            <div className="row">
              <div className="col-md-3">
                <a className="navbar-brand red" ><img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="150" height="175"></img></a>
              </div>
              <div className="col-md-9">
                <p id="headertext">{getUserName(1)}</p>
                <p id="schooltext">{getUserSchool(1)}</p>
              </div>
            </div>

            <div className="row" id="row1">
              <ul className="nav nav-tabs">
                <li><a href="#/profile">General</a></li>
                <li className="active"><a href="#">Discussion</a></li>

              </ul>
            </div>
            <div className="row" id="row2">
              <div className="col-md-3 ">
                <p className="coursediv">Your Active Discussions</p>
                <ul className="nav nav-pills nav-stacked full-width media-list item-config">
                  <li className="active media full-width">
                    <a className="active-discussion-pill media-body" data-toggle="pill" href="#question1">
                    npm install issue
                    <br> CMPSCI 326</br>
                    <br> 02/09/16</br>
                    <br> Prof. Foo</br>
                    <br></br>
                </a>
                  </li>


                </ul>
              </div>
              <div className="col-md-9">

                <div className="panel panel-default fb-status-update-entry">
                  <div className="panel-body">

                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="media">
                          <div className="media-left media-top">
                            <a className="navbar-brand red" href="#"><img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="30" height="34"></img></a>
                          </div>
                          <div className="media-body">
                            <div className="form-group">

                              <textarea className="form-control" rows="2" placeholder="Start a New Discussion Here."></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">

                          <div className="col-md-4">

                          </div>
                          <div className="col-md-8">
                            <div className="pull-right">
                              <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default btn-primary">
                                  <span className="glyphicon glyphicon-camera"></span>
                                </button>
                                <button type="button" className="btn btn-default btn-primary">
                                  <span> POST </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-body">

                        <div className="row">
                          <div className="col-md-10">
                            <div className="media">
                              <div className="media-left media-top">
                                <a className="navbar-brand red" href="#"><img src="img/generic-male-profile.jpg" className="img-circle" alt="Cinque Terre" width="30" height="34"></img></a>
                              </div>
                              <div className="media-body">



                                <a href="#">Joe Schmo</a> · University of Massachusetts Amherst
                                <br> Yesterday at 5:27pm <span></span></br>
                                <br>npm install issue: I cd into my repository, type npm install, and I get this warning: npm WARN package.json team-project-client@0.0.1 No repository field. Any idea what's going wrong?<span></span></br>

                              </div>

                            </div>
                          </div>
                          <div className="col-md-2">
                            <span className="caret pull-right"></span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">

                          </div>
                        </div>

                        <div className="panel-footer">
                          <div className="row">
                            <div className="col-md-12">

                            </div>
                          </div>
                          <ul className="media-list">

                            <li className="media">
                              <div className="media-left media-top">
                                <a className="navbar-brand red" href="#"><img src="img/generic-female-profile.png" className="img-circle" alt="Cinque Terre" width="30" height="34"></img></a>
                              </div>
                              <div className="media-body">
                                <a href="#">Jane Doe</a> · University of Massachusetts Amherst
                                <br> Today at 8:21am <span></span></br>
                                <br> No idea but I will research this! Thank you. <span></span></br>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left media-top">
                                <a className="navbar-brand red" href="#"><img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="30" height="34"></img></a>
                              </div>
                              <div className="media-body">
                                <div className="input-group">
                                  <input type="text" className="form-control" placeholder="Write a comment...">
                                  <span className="input-group-btn">
                                  <button className="btn btn-default btn-primary" type="button">
                                    <span> POST </span>
                                  </button>
                                  </span>
                                </input>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>



        </div>
        {this.props.children}
      </div>
    );
  }
}
