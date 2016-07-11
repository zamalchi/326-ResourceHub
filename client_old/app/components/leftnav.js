import React from 'react';
import {Link} from 'react-router';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div className="col-md-3 left-nav">
        <ul className="nav nav-pills nav-stacked full-width">
          <li className="full-width">
            <Link to={'/course/' + this.props.course}> Class Discussion <span className="glyphicon glyphicon-book pull-right"></span> </Link>
          </li>
        </ul>
        <hr/>
        <ul className="nav nav-pills nav-stacked full-width">
          {this.props.questions.map(function(question) {
            return <li key={question._id}><Link to={`/course/${question.course}/question/${question._id}`} params={question}> {question.contents} </Link></li>;
          })}
        </ul>
      </div>
    );
  }
}
