import React from 'react';
import {Link} from 'react-router';
import LeftNav from './leftnav';

export default class Answer extends React.Component {
  render() {
    return (
      <div>
      <LeftNav />
      <div className="col-md-9 question">
        <div className="container-fluid">
          <div className="progress">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:80+'%'}}> 80% </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <img src="img/math1.png" />
              <hr/> Your Answer: <b>D</b>
              <hr/> Correct Answer: <b>A</b>
              <br/>
              <br/>
              <ul className="list-inline ratings">
                <li>
                  <Link to="#"><span className="glyphicon glyphicon-thumbs-up" data-toggle="tooltip" title="Love it!" data-placement="right"></span></Link>
                </li>
                <li>
                  <Link to="#"><span className="glyphicon glyphicon-thumbs-down red" data-toggle="tooltip" title="Too hard!" data-placement="right"></span></Link>
                </li>
                <li>
                  <Link to="#"><span className="glyphicon glyphicon-remove-sign red" data-toggle="tooltip" title="Remove it!" data-placement="right"></span></Link>
                </li>
                <ul className="list-inline pull-right">
                  <li>
                    <Link to="#">
                      <span className="glyphicon glyphicon-option-horizontal" data-toggle="tooltip" title="More" data-placement="left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="glyphicon glyphicon-education" data-toggle="tooltip" title="Ask professor" data-placement="left"></span>
                    </Link>
                  </li>
                </ul>
              </ul>
              <Link to="/discussion" className="btn btn-sm btn-primary">Discussion</Link>
              <ul className="pull-right actions list-inline">
                <li>
                  <button className="btn btn-primary btn-sm"> Next Question <span className="glyphicon glyphicon-share-alt"></span></button>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
