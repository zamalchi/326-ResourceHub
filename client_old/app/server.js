
import {readDocument, writeDocument, addDocument, readObject} from './database';
/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

var token = 'eyJpZCI6NH0=';
/**
 * Properly configure+send an XMLHttpRequest with error handling, authorization token,
 * and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000 milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

/************************** Start Server Functions ****************************/

// Sync the class data when loading page
function getClassDataSync(classId) {
  var classItem = readDocument('classes', classId._id);
  // resolve admins
  classItem.admins = classItem.admins.map((id) => readDocument('users', id));
  // resolve students
  classItem.students = classItem.students.map((id) => readDocument('users', id));
  // resolve lessons
  classItem.lessons = classItem.lessons.map((id) => readDocument('lessons', id));
  return classItem;
}

// used in userinfoprofile, gets all the classes and their respective data
export function getUserClassData(userId, cb) {
  // get the user's data
  var userData = readDocument('users', userId);
  // these are the classes the user is enrolled in
  var classData = userData.classes;
  // map the class references (id's) to actual class objects
  classData = classData.map(getClassDataSync);
  emulateServerReturn(classData, cb);
}

// gets a specific class's data.
// NOTE: use this for getting a specific class's data.
export function getCourseData(classId, cb) {
  console.log("here is the classID");
  console.log(classId);
  var courseData = readDocument('classes', classId);
  emulateServerReturn(courseData, cb);
}

export function getUserData(user, cb) {
  // Get the user object with the id "user"
  var userData = readDocument('users', user);
  emulateServerReturn(userData, cb);
}

// for each question in a particular class, get its question
export function getCourseQuestions(classId, cb) {
  // Get the classID data
  var classData = readDocument("classes", classId);
  // these are the questions for this class
  var questions = classData.questions;
  // map the submission references (id's) to actual submission objects
  var questionData = questions.map(getQuestionDataSync);
  emulateServerReturn(questionData, cb);
}

function getQuestionDataSync (questionId) {
  // get the question
  var question = readDocument('questions', questionId);
  // TODO: resolve the rest of the fields of a question Object
  return question;
}

// Sync the submission data
function getSubmissionDataSync(submissionId) {
  var submissionItem = readDocument('submissions', submissionId);
  return submissionItem;
}

// start of database functions
// abstract database calls into functions
// ******************************

// ############################################################################
// returns a user from the database
export function readUser(uid) { return readDocument('users', uid); }
// write user to the database
export function writeUser(user) { writeDocument('users', user); }
// adds user to the database (provides id)
export function addUser(user) { return addDocument('users', user); }

// ############################################################################
// returns a class from the database
export function readClass(cid) { return readDocument('classes', cid); }
// write class to the database
export function writeClass(classObj) { writeDocument('classes', classObj); }
// adds class to the database (provides id)
export function addClass(classObj) { return addDocument('classes', classObj); }

// ############################################################################
// TODO: What is this for? It's the same as readUser. -Eric
export function readMajor(cid) { readDocument('users', cid); }

// ############################################################################
// returns a lesson from the database
export function readLesson(lid) { return readDocument('lessons', lid); }
// write lesson to the database
export function writeLesson(lesson) { writeDocument('lessons', lesson); }
// adds lesson to the database (provides id)
export function addLesson(lesson) { return addDocument('lessons', lesson); }

// ############################################################################
// returns a submission from the database
export function readSubmission(sid) { return readDocument('submissions', sid); }
// write submission to the database
export function writeSubmission(submission) { writeDocument('submissions', submission); }
// adds submission to the database (provides id)
export function addSubmission(submission) { return addDocument('submissions', submission); }

// ############################################################################
// returns a question from the database
export function readQuestion(qid) {
  //console.log("readQuestion: " + qid);
  return readDocument('questions', qid); }
// write question to the database
export function writeQuestion(question) { writeDocument('questions', question); }
// adds question to the database (provides id)
export function addQuestion(question) { return addDocument('questions', question); }

// ############################################################################
// returns a discussion from the database
export function readDiscussion(did) { return readDocument('discussions', did); }
// write discussion to the database
export function writeDiscussion(discussion) { writeDocument('discussions', discussion); }
// adds discussion to the database (provides id)
export function addDiscussion(discussion) { return addDocument('discussions', discussion); }
// ############################################################################

// ******************************
// end of database functions

// ############################################################################
// ############################################################################

// start of resolve functions
// they return the the specified data structure
// but with references resolved by the database
// ******************************

// resolves class
export function resolveClass(cid) {
  var classObj = readClass(cid);
  // resolve admins
  classObj.admins = classObj.admins.map((id) => readUser(id));
  // resolve students
  classObj.students = classObj.students.map((id) => readUser(id));

  // resolve lessons
  classObj.lessons = classObj.lessons.map((id) => resolveLesson(id));

  return classObj;
}

// resolves lesson
export function resolveLesson(lid) {
  var lesson = readLesson(lid);

  // resolve lesson's submissions
  lesson.submissions = lesson.submissions.map((id) => resolveSubmission(id));

  // resolve lesson's rating
  lesson.ratings = lesson.ratings.forEach((rating) => {
    // resolve each rating's user
    rating.user = readUser(rating.user);
  });

  return lesson;
}

// resolves submission
export function resolveSubmission(sid) {
  var submission = readSubmission(sid);

  // resolve question
  submission.question = readQuestion(submission.question);
  // resolve discussion
  submission.discussion = readDiscussion(submission.discussion);
}


// resolves question
export function resolveQuestion(qid) {

  var question = readQuestion(qid);

  // resolve authors
  question.authors = question.authors.map((id) => readUser(id));
  // resolve results (needed?)
  return question;

}
/****************** Class functions ****************/
export function addQuestion(question, answer, class_id, author_id, cb) {
  var submissions = readDocument('submissions', submissions);

  // resolve ratings (needed?)
  question.ratings = question.ratings.forEach((rating) => {
    // resolve each rating's user
    rating.user = readUser(rating.user);
  });

  return question;
}

// resolves discussion
export function resolveDiscussion(did) {
  var discussion = readDiscussion(did);

  // resolve each post
  discussion.posts = discussion.posts.forEach((post) => {
    // resolve post author
    post.author = readUser(post.author);
    // resolve each comment on post
    post.comments = post.comments.forEach((comment) => {
      // resolve comment author
      comment.author = readUser(comment.author);
    });
  });

  return discussion;
}

// ******************************
// end of resolve functions

// ############################################################################
// ############################################################################

// start of database UPDATE functions
// ******************************
export function addSubmissionToLesson(lessonId, authorId, question, cb) {
  var lesson = readLesson(lessonId);

  // get current UNIX time
  var time = new Date().getTime();

  var newSubmission = {
    // pass on classId (parent of lesson)
    "class": lesson.class,
    // pass on lessonId (this)
    "lesson": lessonId,
    // create new question - call function and pass on question data
    "question": "", // TODO: issue with generating id and passing to question
    // create new empty discussion
    "discussion": newDiscussion() // TODO: same issue; do we pass ids to child components?
  }

  // get lesson
  // make new submission with question and new discussion
  // push submission into lesson
  // write document

  // update lesson metadata
  lesson.meta.dateModified = time;

  lesson.submissions.push(newSubmission._id); // TODO: id issue

  writeLesson(lesson);
  writeSubmission(newSubmission);

  emulateServerReturn(newSubmission, cb);
  }

// ******************************
// end of database UPDATE functions






/****************** Question Discussion functions ****************/
export function postAnswer() {}
export function getAnswer() {}
export function getReply() {}

// ############################################################################
// ############################################################################

// start of Discussion CRUD functions
// ******************************

// adds a post to a discussion
// returns a resolved version of the discussion
export function addPostToDiscussion(did, user, contents, cb) {
  var discussion = readDiscussion(did);

  discussion.posts.push({
    "contents": contents,
    "author": user,
    "postdate": new Date().getTime(),
    "comments": []
  });
  writeDiscussion(discussion);

  emulateServerReturn(resolveDiscussion(did), cb);
}

export function removePostFromDiscussion(did, postIndex, cb) {
  var discussion = readDiscussion(did);

  discussion.posts = discussion.posts.splice(postIndex, 1);
  writeDiscussion(discussion);

  emulateServerReturn(resolveDiscussion(did), cb);
}

// adds a comment to a post in a discussion
// returns a resolved version of the discussion
// almost the same as addDiscussionPost
export function addCommentToPost(did, postIndex, user, contents, cb) {
  var discussion = readDiscussion(did);

  discussion.posts[postIndex].comments.push({
    "contents": contents,
    "author": user,
    "postdate": new Date().getTime(),
    "comments": []
  });
  writeDiscussion(discussion);

  emulateServerReturn(resolveDiscussion(did), cb);
}

export function removeCommentFromPost(did, postIndex, commentIndex, cb) {
  var discussion = readDiscussion(did);

  discussion.posts[postIndex].comments.splice(commentIndex, 1);
  writeDiscussion(discussion);

  emulateServerReturn(resolveDiscussion(did), cb);
}

// ******************************
// end of Discussion CRUD functions

// ############################################################################
// ############################################################################

// start of Class CRUD functions
// ******************************

export function addLessonToClass(cid, name, alias, cb) {
  var classObj = readClass(cid);

  var time = new Date().getTime();

  var newLesson = {
    "name": name,
    "alias": alias,
    "class": cid,
    "submissions": [],
    "ratings": [],
    "meta": {
      "dateCreated": time,
      "dateModified": time
    }
  };
  newLesson = addLesson(newLesson);

  classObj.lessons.push(newLesson._id);
  writeClass(classObj);

  emulateServerReturn(resolveLesson(newLesson._id), cb);

}

export function Move(element,width) {
    var elem = document.getElementById(element);
    var w = width;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            // width++;
            elem.style.width = w + '%';
        //  elem.css('width', width + "%");
        }
    }
}



// ******************************
// end of Class CRUD functions

// ############################################################################
// ############################################################################

// start of Lesson CRUD functions
// ******************************

export function addQuestionToLesson(lid) {
  var lesson = readLesson(lid);

  // TODO
}

// ******************************
// end of Lesson CRUD functions

// ############################################################################
// ############################################################################

// start of Question CRUD functions
// ******************************

// ******************************
// end of Question CRUD functions

// ############################################################################
// ############################################################################

/****************** Class functions ****************/

export function getSubmissions(class_id) {
  var submissions = readObject('submissions');
  for(var id in submissions) {
    if(submissions[id] === undefined) {
      return undefined;
    }
    if(submissions[id].class !== parseInt(class_id,10)) {
      delete submissions[class_id];//NOT QUESTION FROM CLASS ==> REMOVE IT
    }
  }
  return submissions;
}

export function getQuestion(question_id, cb) {
  var question = readDocument('questions', question_id);

  emulateServerReturn(question, cb);
}

export function getQuestionNames(class_id, cb) {
  var submissions = getSubmissions(class_id);
  var questions = [];
  var questionNames = [];
  for(var key in submissions) {
    questions.push(resolveQuestion(key));
  }
  questions.forEach( function(x) {
    questionNames.push({'question':x.contents, 'id':x._id, 'courseid':parseInt(class_id,10)});
  });
  emulateServerReturn(questionNames, cb);
}

export function getClass(classId, cb) {
  sendXHR('GET', '/class/1/', undefined, (xhr) => {
     // Call the callback with the data.
     cb(JSON.parse(xhr.responseText));
   });
}

// ############################################################################
// ############################################################################

// start of database READ functions
// ******************************

export function getUserName(uid){
  var user = readUser(uid);
  return user.firstname + user.lastname;
}

export function getUserSchool(uid){
  var user = readUser(uid);
  return user.affiliation;
}




export function getUserGrade(uid){
  var user = readUser(uid);
  return user.grade;
}

// export function getMajors(uid) {
//   var item = readUser uid);
//   // Resolve 'like' counter.
//   item.majors = item.majors.map((id) => readDocument('users', id));
//   // Assuming a StatusUpdate. If we had other types of FeedItems in the DB, we would
//   // need to check the type and have logic for each type.
//   // Resolve comment author.
//   // feedItem.comments.forEach((comment) => {
//   //   comment.author = readDocument('users', comment.author);
//   // });
//   return item;
// }
// gets all classes from user
export function getUserClasses(uid) {
  var user = readUser(uid);
  // return list of resolved classes
  return user.classes.map((id) => resolveClass(id._id));
}

// gets classes where user is an admin
export function getAdminClasses(uid) {
  // get all classes
  return getUserClasses(uid).filter((classObj) => {
    // filter - keep admin classes
    return classObj.permission === "admin";
  });
}

// gets classes where user is a student
export function getStudentClasses(uid, cb) {
  // get all classes
  emulateServerReturn(getUserClasses(uid), cb);//.filter((classObj) => {
    // filter - keep student classes
    //return classObj.permission === "student";
  //});
}

/**Gets all the course names and ids the student is enrolled in. --Ethan--
@param uid the id of the student
@return the course names and ids the student is currently enrolled in
**/
export function getStudentClassNames(uid, cb) {
  var userClasses = getUserClasses(uid);
  var classNames = [];
  userClasses.forEach(function(classObj) {
    var classIdTuple = {
        "id":classObj._id,
        "name":classObj.alias
      };
    classNames.push({classIdTuple});
  });
  console.log(classNames);
  emulateServerReturn(classNames, cb);
  }

  /**Gets all the classes currently in the Database
  @return List of all the classes in the Database
  **/
  function getAllClasses() {
    return readObject('classes');

  }

  /**Gets all the class names of classes currently in the Database
  @return List of all the class names in the Database
  **/
  export function getAllClassNames() {
    var courses = getAllClasses();
    var courseNames = [];
    for(var course in courses) {
      courseNames.push(courses[course].name);
    }
    return courseNames;
  }


// export function getCurrentClasses(userid, cb) {
//   var classes = readDocument('classes', 1);
//   var currClasses = [];
//   for(let c in classes) {
//     if (c.students.contains(userid)) {
//       currClasses += c.classname;
//     }
//   }
//   emulateServerReturn(currClasses, cb);
//
// }

// ******************************
// end of database READ functions

// ############################################################################
// ############################################################################

/****************** Professor Page functions ****************/
export function getStudents() {

}

export function getClasses() {

}

export function addClasses() {

}

export function postProblems() {

}
