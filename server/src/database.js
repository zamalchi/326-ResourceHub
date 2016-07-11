// Your startup's initial mock objects go here
var initialData = {

  // start of "classes" collection
  // ******************************
  // classes are the highest non-user unit; the site is organized first into classes
  "classes": {

    "1": {
      // class id
      "_id": 1,
      // class name
      "name": "MATH 102",
      // class alias
      "alias": "Algebra II",
      // admin list for this class
      "admins": [],
      // list of students participating in the class
      "students": [],
      // list of lessons that make up the class
      // classes are split up into lessons
      "lessons": [1],
      // TODO: class-specific discussion
      "discussion": 1,
      // class meta data
      "meta": {
        // date the class was created
        "dateCreated": 1453690800000,
        // date the class was last modified
        "dateModified": 1453690800000
      }
    }
  },
  // ******************************
  // end of "classes" collection

  // start of "lessons" collection
  // ******************************
  // a lesson is a collection of individual questions possibly related by topic
  // they serve to organize a class and provide the possibility of progressing more linearly
  "lessons": {
    "1": {
      // lesson id
      "_id": 1,
      // lesson name
      "name": "1.1",
      // lesson alias
      "alias": "Exploring the Cartesian Plane",
      // owning class
      "class": 1,
      // list of submissions in the lesson
      "submissions": [1, 2],
      // list of user/rating pairs (rating: -1, 0, 1 <=> bad, none, good)
      "ratings": [{
        "user": 1,
        "value": 1
      }],
      // lesson meta data
      "meta": {
        "dateCreated": 1453690800000,
        "dateModified": 1453690800000
      }
    }
  },
  // ******************************
  // end of "lessons" collection

  // start of "submissions" collection
  // ******************************
  // submissions contain a unique question/discussion pair; used for organization
  "submissions": {
    "1": {
      // submission id
      "_id": 1,
      // this submission's class
      "class": 1,
      // this submission's lesson
      "lesson": 1,
      // this submission's question
      "question": 1,
      // this submission's discussion
      "discussion": 1
    },
    "2": {
      // submission id
      "_id": 2,
      // this submission's class
      "class": 1,
      // this submission's lesson
      "lesson": 1,
      // this submission's question
      "question": 2,
      // this submission's discussion
      "discussion": 2
    }
  },
  // ******************************
  // end of "submissions" collection

  // start of "questions" collection
  // ******************************
  "questions": {
    "1": {
      // question id
      "_id": 1,
      // submission containing the question
      "submission": 1,
      // users who have contributed to this question
      "authors": [],
      // main contents of the quetsion
      "contents": "In the xy-plane, if the parabola with equation y = ax^2 + bx + c, where a, b, and c are constants, passes through the point (-1,1), which of the following must be true?",
      // multiple choice answers displayed with question contents
      "answers": [{
        "letter": "A",
        contents: "a - b = 1"
      }, {
        "letter": "B",
        contents: "-b + c = 1"
      }, {
        "letter": "C",
        contents: "a + b + c = 1"
      }, {
        "letter": "D",
        contents: "a - b + c = 1"
      }],
      // correct answer id
      "solution": 1,
      // users' answers to the question
      "results": [{
        "user": 1,
        "selected": 4
      }],
      // user ratings of question
      "ratings": [],

      // question discussion
      "discussion": 1,

      // question meta data
      "meta": {
        "dateCreated": 1453690800000,
        "dateModified": 1453690800000
      }
    },
    "2": {
      // question id
      "_id": 2,
      // submission containing the question
      "submission": 1,
      // users who have contributed to this question
      "authors": [],
      // main contents of the quetsion
      "contents": "6÷2(1+2)=",
      // multiple choice answers displayed with question contents
      "answers": [{
        "letter": "A",
        contents: "9"
      }, {
        "letter": "B",
        contents: "1"
      }, {
        "letter": "C",
        contents: "3"
      }, {
        "letter": "D",
        contents: "0"
      }],
      // correct answer id
      "solution": 1,
      // users' answers to the question
      "results": [{
        "user": 1,
        "selected": 4
      }],
      // user ratings of question
      "ratings": [],

      // question discussion
      "discussion": 1,

      // question meta data
      "meta": {
        "dateCreated": 1453890800000,
        "dateModified": 1454690800000
      }
    }
  },
  // ******************************
  // end of "questions" collection

  // start of "discussions" collection
  // ******************************
  "discussions": {
    "1": {
      // discussion id
      "_id": 1,
      // question to which discussion belongs
      "question": 1,
      // discussion posts
      "posts": [{
        // post text
        "contents": "",
        // post author
        "author": 1,
        // post postedate
        "postdate": 1453690800000,

        // comments on post
        "comments": [{
          // comment author
          "author": 2,
          // comment content
          "content": "",
          // comment postdate
          "postdate": 1453690800000
        }]
      }]
    },
    "2": {
      // discussion id
      "_id": 2,
      // question to which discussion belongs
      "question": 1,
      // discussion posts
      "posts": [{
        // post text
        "contents": "",
        // post author
        "author": 1,
        // post postedate
        "postdate": 1453690800000,

        // comments on post
        "comments": [{
          // comment author
          "author": 2,
          // comment content
          "content": "",
          // comment postdate
          "postdate": 1453690800000
        }]
      }]
    }
  },
  // ******************************
  // end of "discussions" collection

  // start of "users" collection
  // ******************************
  "users": {

    "1": {
      "_id": 1,
      "firstname": "John ",
      "lastname": "Smith",
      "username": "",
      "password": "",
      "email": "",
      "affiliation": "University of Massachusetts",
      "grade": "Undergrad 2017",
      "GPA": "3.9", // necessary? needed?
      "majors": ["Computer Science"],
      // classes user is a part of
      "classes": [{
        // class id
        "_id": 1,
        // user's permissions within class: student/admin
        "permission": "student",
        // questions user has interacted with in class
        "questions": {
          // questions authored - admin
          "authored": [],
          // questions answered - student
          "answered": []
        }
        // user's progress in completing the class
        //"progress": ""
      }]
    }
  }
  // ******************************
  // end of "users" collection
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), {
      encoding: 'utf8'
    });
    updated = false;
  }
}, 200);
