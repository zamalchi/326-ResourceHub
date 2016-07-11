import React from 'react';

  export default class Reply extends React.Component {
    render() {
      return (
        <div>
          <div className="col-md-8 col-md-offset-3">
            <div className="container-fluid">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                      Re: How do I analyze this DATA?
                  </h4>
                </div>
                <div className="panel-body">
                  <p>
                    Hey John, have you tried looking at Workshop 3? Maybe that would help you!
                  </p>
                  <hr>
                  </hr>
                  <ul className="list-inline ratings">
                    <li>
                      <button className="btn btn-primary user" type="button">
                        <span className="glyphicon glyphicon-user"></span> Tim Richards
                      </button>
                    </li>
                    <li>
                      <a href="#"><span className="glyphicon glyphicon-thumbs-up" data-toggle="tooltip" title="Good post"></span></a>
                    </li>
                    <li>
                      <a href="#"><span className="glyphicon glyphicon-thumbs-down red" data-toggle="tooltip" title="Bad Post"></span></a>
                    </li>
                  </ul>

                  <form className="reply">
                    <div className="input-group add-on">
                      <input type="text" className="form-control" placeholder="Reply to Tim Richards">
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-bold"></i></button>
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-italic"></i></button>
                        <button className="btn btn-default" type="submit">Post <i className="glyphicon glyphicon-share-alt"></i></button>
                      </div>
                      </input>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
