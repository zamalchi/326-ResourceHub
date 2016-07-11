import React from 'react';
import {Link} from 'react-router';
import LeftNav from './leftnav';
import {getQuestion, getCourseData, getCourseQuestions} from '../server';

export default class Question extends React.Component {
  constructor(props) {
    console.log("Here are the questions's props:");
    console.log(props);
    super(props);
    this.state = {
      courseId: this.props.courseid,
      questionId: this.props.questionid,
      courseData: [],
      lessons: [],
      questions: [],
      question: ''
    }
  }

  refresh() {
    getCourseData(this.state.courseId, (courseData) => {
      getCourseQuestions(this.state.courseId, (questionData) => {
        for(var question in questionData) {
          if(questionData[question]._id === parseInt(this.state.questionId,10)) {
            this.setState({question:questionData[question].contents})
          }
        }
        this.setState({
          courseData: courseData,
          questions: questionData
        });
      });
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
      <LeftNav course={this.state.courseId} questions={this.state.questions}/>
      <div className="col-md-9 col-md-offset-2 question">
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-body">
              {this.state.question}
              <br />
              {/*this.state.answers*/}
              <hr/>
              <div className="container-fluid">
                <div className="input-group">
                  <div className="radio">
                    <label>
                      <input type="radio" name="answer" id="answer-0" value="1" defaultChecked="checked"/> A
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="answer" id="answer-1" value="2" defaultChecked="checked"/> B
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="answer" id="answer-2" value="3" defaultChecked="checked"/> C
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="answer" id="answer-3" value="4" defaultChecked="checked"/> D
                    </label>
                  </div>
                </div>
              </div>
              <br/>
              <ul className="list-inline ratings">
                <li>
                  <a href="#"><span className="glyphicon glyphicon-thumbs-up" data-toggle="tooltip" title="Love it!"></span></a>
                </li>
                <li>
                  <a href="#"><span className="glyphicon glyphicon-thumbs-down red" data-toggle="tooltip" title="Too hard!"></span></a>
                </li>
                <li>
                  <a href="#"><span className="glyphicon glyphicon-remove-sign red" data-toggle="tooltip" title="Remove it!"></span></a>
                </li>
                <ul className="list-inline pull-right">
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-education"></span> Ask professor
                    </a>
                  </li>
                </ul>
              </ul>
              <Link to={`/course/${this.props.courseid}/question/${this.props.id}/answer`} className="btn btn-primary btn-sm"> View Answer </Link>
              <ul className="pull-right actions list-inline">
                <li>
                  <button className="btn btn-default btn-sm no-border blue-hover" data-toggle="tooltip" title="More"><span className="glyphicon glyphicon-option-horizontal"></span></button>
                </li>
                <li>
                  <button className="btn btn-default btn-sm no-border blue-hover" data-toggle="tooltip" title="Discuss"><span className="glyphicon glyphicon-book"></span></button>
                </li>
                <li>
                  <a href='#' ><button className="btn btn-default btn-sm no-border"> Skip <span className="glyphicon glyphicon-share-alt"></span></button></a>
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
