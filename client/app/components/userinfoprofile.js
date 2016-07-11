import React from 'react';
import { Link } from 'react-router';
import { getUserData, getUserClassData, Move } from '../server';

export default class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // holds user data (name, email, gpa, majors, etc...)
      userData: [],
      // will hold the user's class data (name of classes, lessons, discussion, etc...)
      classData: []
    };
  }



  // refresh will get the User's data, and also user's Classes data
  refresh() {

    getUserData(this.props.users, (userData) => {
      getUserClassData(this.props.users, (classData) => {
        this.setState({
          userData: userData,
          classData: classData
        });
      });
    });


  }

  componentDidMount() {
    this.refresh();
    Move("myBar",50)

  }






  render(){
    return (
      <div>
        <div className="col-md-10 col-md-offset-1 text maindiv" >
          <div className= "row">
            <div className="col-md-3">
              <a className="navbar-brand red" href="#"><img src="img/ppic.png" className="img-circle" alt="Cinque Terre" width="150" height="175"/></a>
            </div>
            <div className="col-md-8">
              <p id="headertext">{this.state.userData.firstname + " " + this.state.userData.lastname}</p>
              <p id="schooltext">{this.state.userData.affiliation}</p>
            </div>
          </div>
          <div className="row" id="row1">
            <ul className="nav nav-tabs">
              <li className="active"><a href="#">General</a></li>
              <li><Link to="/userdiscussion">Discussion</Link></li>
            </ul>
          </div>
          <div className="row" id="row2">
            <div className="col-md-3 ">
              <p className = "coursediv">Course participation</p>
                <ul className="nav nav-pills nav-stacked">
                  <div>
                    {this.state.classData.map(function(course) {
                      return <li><Link to={"/course/" + course._id} params={course} > {course.name} </Link></li>;
                    })}
                  </div>
                </ul>
            </div>
            <div className="col-md-9">
              <p className = "coursediv">Progress in current question set:</p>
              <div className="progress">

                <div className="progress-bar progress-bar-success" id = "myBar" role="progressbar" aria-valuenow="{this.state.userData.progress}" aria-valuemin="0" aria-valuemax="100" >  </div>
              </div>
              <p className = "coursediv">Overall rankings</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Correct</th>
                    <th>Incorrect</th>
                    <th>Skipped</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="info">
                    <td>17/20</td>
                    <td>2/20</td>
                    <td>1/20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" id="row3">
              <p className = "coursediv">Academic History:</p>
              <p><span className="glyphicon glyphicon-home"></span>{" " + this.state.userData.grade}</p>
              <p><span className="glyphicon glyphicon-education"></span></p>
            </div>
            <div className="col-md-6" id="row4">
              <div className="row">
                <p className="coursediv">Skill proficiency</p>
                <ul className="list-inline pbr">
                  <li><p className="listi">Skill</p></li>
                  <li><p className="listi">Completion</p></li>
                </ul>
              </div>
              <div className="row" id="progressbar">
                <ul className="list-inline pbr" >
                  <li><p>Java</p></li>
                  <li><div className="progress-bar progress-bar-success" id="myBar" role="progressbar" aria-valuenow="{this.state.userData.progress}" aria-valuemin="0" aria-valuemax="100" >  </div></li>
                </ul>
                <ul className="list-inline pbr" >
                  <li><p>Python</p></li>
                  <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="ppb">  </div></li>
                </ul>
                <ul className="list-inline pbr" >
                  <li><p>C++</p></li>
                  <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="ccpb"> </div></li>
                </ul>
                <ul className="list-inline pbr" >
                  <li><p>Calculus</p></li>
                  <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar"  aria-valuemin="0" aria-valuemax="200" id="cpb">  </div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
