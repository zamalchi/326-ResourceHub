import React from 'react';
import {Link} from 'react-router';
import LeftNav from './leftnav';
import Post from './post';
import {getQuestionNames, getCourseData, getCourseQuestions} from '../server';

export default class Course extends React.Component {
  constructor(props) {
    console.log("Here are the course's props:");
    console.log(props);
    super(props);
    this.state = {
      courseId: this.props.params.courseid,
      courseData: [],
      lessons: [],
      questions: []
    }
  }

  refresh() {
    getCourseData(this.state.courseId, (courseData) => {
      getCourseQuestions(this.state.courseId, (questionData) => {
        for(var question in questionData) {
          questionData[question].course = this.state.courseId;
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
    console.log("final state");
    console.log(this.state);
    return (
      <div>
        <LeftNav course={this.state.courseId} questions={this.state.questions}/>
        <div className="col-md-9 col-md-offset-2">
          <h3> This the class page for {this.state.courseData.name} </h3>
        </div>
      </div>
    );
  }
}
