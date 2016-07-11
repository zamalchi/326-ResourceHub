import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from '../app/components/userinfoprofile';
import Question from '../app/components/question';
import Answer from '../app/components/answer';
import TopNav from '../app/components/topnav';
import Discussion from '../app/components/discussion';
import UserDiscussion from '../app/components/userdiscussion';
import Course from '../app/components/course';
import { IndexRoute, Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { getStudentClasses, getStudentClassNames, getAllClassNames } from './server';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class Submission extends React.Component {
  render() {
    return (
      <Question courseid={this.props.params.courseid} questionid={this.props.params.questionid} />
    );
  }
}

class UserInfopage extends React.Component {
  render() {
    return <UserInfo users={1} />;
  }
}

ReactDOM.render(
    <TopNav allClasses={getAllClassNames()} />

, document.getElementById("topNav"));

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={UserInfo} />

      <Route path="course/:courseid/question/:questionid" component={Submission} />
      <Route path="course/:courseid/question/:questionid/answer" component={Answer} />
      <Route path="discussion" component={Discussion} />
      {/*placeholder route for Discussions*/}
      <Route path="userdiscussion" component={UserDiscussion} />
      {/*placeholder route for askprofessor*/}
      <Route path="askprofessor" component={Discussion} />
      {/*Profile*/}
      <Route path="profile" component={UserInfopage} />
      <Route path="profileDiscussion" component={UserInfopage} />
      <Route path="course/:courseid" component={Course} />

      <IndexRedirect to="/profile" />
    </Route>
  </Router>
),document.getElementById('main'));
