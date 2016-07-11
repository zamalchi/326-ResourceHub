import React from 'react';
import {Link} from 'react-router';

export default class Contact extends React.Component {

  render() {
    return (
      <div>
        <div className="row">

          // Left Navbar
          <div className="col-md-3 left-nav">
            <div className="problem-set-list container-fluid">
              <h4>Problem Sets</h4>
              <ul className="nav nav-pills nav-stacked full-width media-list item-config">
                <li className="active media full-width">
                  <a className="problem-set-pill media-body" data-toggle="pill" href="#question1">
                      Math Trouble
                      <br> MTH 110
                      <br> 02/01/16 - 02/09/16
                      <br> Prof. Foo
                      <br> 2 sections - 16 problems
                      <br>
                  </a>
                </li>
                <li className="media full-width">
                  <a className="problem-set-pill media-body" data-toggle="pill" href="#question1">
                      Completed Bio Lesson
                      <br> BIO 212
                      <br> 01/25/16 - 01/28/16
                      <br> Prof. Bar, Prof. Qux
                      <br> 1 section - 10 problems
                      <br>
                  </a>
                </li>
                <li className="media full-width">
                  <a className="problem-set-pill media-body" data-toggle="pill" href="#question1">
                      COMPSCICORE
                      <br> CS 220, CS 230, ...
                      <br> 10/05/15 - 12/27/15
                      <br> Prof. Baz
                      <br> 4 sections - 26 problems
                      <br>
                  </a>
                </li>
                <li className="media full-width">
                  <a className="problem-set-pill media-body" data-toggle="pill" href="#question1">
                      Quantum Mechanics
                      <br> PHS 510
                      <br> 09/01/15 - 09/01/15
                      <br> Prof. Foo
                      <br> 2 sections - 16 problems
                      <br>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Main Question Area -->
          <div className="col-md-9">
            <div className="container-fluid">

              <!-- PROBLEM SET HEADER -->
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-md-10">
                          <h4 className="panel-title">
                            Math Trouble
                          </h4>
                        </div>
                        <div className="col-md-2">
                          <button type="button" className="btn btn-default btn-blue">
                            <span className="glyphicon glyphicon-eye-open"></span>
                          </button>
                          <button type="button" className="btn btn-default btn-blue">
                            <span className="glyphicon glyphicon-remove"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body problem-set-info-panel">
                      <div className="problem-set-info">
                        <div className="row">
                          <div className="col-md-12">
                            <strong>Class:</strong> MTH 110
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <strong>Date started:</strong> 02/01/2016
                          </div>
                          <div className="col-md-8">
                            <strong>Last Modified:</strong> 02/09/2016
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <strong>Shared with:</strong> Prof. Chelsea Foo
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <strong>Sections:</strong> 2
                          </div>
                          <div className="col-md-8">
                            <strong>Problems:</strong> 16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <!-- PROBLEM SECTION -->
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-default problem-set-header">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-md-10">
                          <h4 className="panel-title">
                            Section 1.1
                          </h4>
                        </div>
                        <div className="col-md-2">
                          <button type="button" className="btn btn-default btn-blue">
                            <span className="glyphicon glyphicon-eye-open"></span>
                          </button>
                          <button type="button" className="btn btn-default btn-blue">
                            <span className="glyphicon glyphicon-remove"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <!-- QUESTION 1 -->
                      <div className="panel panel-default question-panel">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-md-10">
                              <h4 className="panel-title">
                                Question 1
                              </h4>
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="btn btn-default btn-blue">
                                <span className="glyphicon glyphicon-eye-open"></span>
                              </button>
                              <button type="button" className="btn btn-default btn-blue">
                                <span className="glyphicon glyphicon-remove"></span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-7">
                              <img src="img/math1.png">
                            </div>
                            <!-- question messages -->
                            <div className="col-md-5">
                              <ul className="media-list full-width">
                                <li className="media">
                                  <div className="media-left media-top">
                                    <a className="navbar-brand red" href="profile.html"><img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="30" height="34"></a>
                                  </div>
                                  <div className="media-body">
                                    <a href="profile.html">John Smith</a>
                                    <br><span>Yesterday at 6:13pm</span>
                                    <br><span>I don't understand this problem at all!</span>
                                  </div>
                                </li>
                                <li className="media">
                                  <div className="media-left media-top">
                                    <a className="navbar-brand red" href="instructor_profile.html"><img src="img/generic-female-profile.png" className="img-circle" alt="Cinque Terre" width="30" height="34"></a>
                                  </div>
                                  <div className="media-body">
                                    <a href="instructor_profile.html">Prof. Foo</a>
                                    <br><span>Yesterday at 8:27pm</span>
                                    <br><span>Try substituting -1 for x!
                                  <br>But you got it anyway???</span>
                                  </div>
                                </li>

                              </ul>


                            </div>

                            <!-- end row -->
                          </div>

                          <hr>

                          <div className="row">
                            <div className="col-md-7">
                              <div className="container-fluid question-answer">
                                <span className="my-answer"><strong>My answer: D</strong></span>
                                <br>
                                <span className="correct-answer"><strong>Correct answer: D</strong></span>
                                <br>
                                <ul className="list-inline ratings">
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-thumbs-up greyed-out" data-toggle="tooltip" title="Love it!"></span></a>
                                  </li>
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-thumbs-down red" data-toggle="tooltip" title="Too hard!"></span></a>
                                  </li>
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-remove-sign red greyed-out" data-toggle="tooltip" title="Remove it!"></span></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group">
                                <!-- rows="2" means "display the textarea as 2 rows high". The user can
                              enter more than 2 rows of text. -->
                                <textarea className="form-control" rows="2" placeholder="Start a New Message Here."></textarea>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <!-- QUESTION 2 -->
                      <div className="panel panel-default question-panel">
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-md-10">
                              <h4 className="panel-title">
                                Question 2
                              </h4>
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="btn btn-default btn-blue">
                                <span className="glyphicon glyphicon-eye-open"></span>
                              </button>
                              <button type="button" className="btn btn-default btn-blue">
                                <span className="glyphicon glyphicon-remove"></span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-7">
                              <img src="img/math1.png">
                            </div>
                            <!-- question messages -->
                            <div className="col-md-5">
                              <ul className="media-list full-width">
                                <li className="media">
                                  <div className="media-body">
                                    <h4 className="empty-message">No messages</h4>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <!-- end row -->
                          </div>

                          <hr>

                          <div className="row">
                            <div className="col-md-7">
                              <div className="container-fluid question-answer">
                                <span className="my-answer"><strong>My answer: D</strong></span>
                                <br>
                                <span className="correct-answer"><strong>Correct answer: D</strong></span>
                                <br>
                                <ul className="list-inline ratings">
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-thumbs-up" data-toggle="tooltip" title="Love it!"></span></a>
                                  </li>
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-thumbs-down red greyed-out" data-toggle="tooltip" title="Too hard!"></span></a>
                                  </li>
                                  <li>
                                    <a href="#"><span className="glyphicon glyphicon-remove-sign red greyed-out" data-toggle="tooltip" title="Remove it!"></span></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group">
                                <!-- rows="2" means "display the textarea as 2 rows high". The user can
                              enter more than 2 rows of text. -->
                                <textarea className="form-control" rows="2" placeholder="Start a New Discussion Here."></textarea>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}
