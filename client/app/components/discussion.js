import React from 'react';
import {getName, getContents} from '../server';
import {Link} from 'react-router';

//TODO: We still need to populate the children of a discussion. The children
// will be the replies associated with a discussion.

  export default class Discussion extends React.Component {
    render() {
      return (
        <div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                  How do I analyze this DATA?
              </h4>
              <br>
              </br>
            </div>
            <div className="panel-body">
              <p>
                Do not go gentle into that good night,
                Old age should burn and rave at close of day;
                Rage, rage against the dying of the light?
              </p>
              <br>
              </br>
              <hr>
              </hr>
              <ul className="list-inline ratings">
                <li>
                  <Link to="/" className="btn btn-primary user" type="button">
                     <span className="glyphicon glyphicon-user"></span> {getName(1)}
                  </Link>
                </li>
                <li>
                  <a href="#"><span className="glyphicon glyphicon-thumbs-up" data-toggle="tooltip" title="Good post"></span></a>
                </li>
                <li>
                  <a href="#"><span className="glyphicon glyphicon-thumbs-down red" data-toggle="tooltip" title="Bad Post"></span></a>
                </li>
                <li>
                  <a href="#"><span className="glyphicon glyphicon-edit grey" data-toggle="tooltip" title="Edit Your Post"></span></a>
                </li>
                <button className="btn btn-primary pull-right" type="button">
                  <span className="glyphicon glyphicon-share-alt"></span> Reply
                </button>
              </ul>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
