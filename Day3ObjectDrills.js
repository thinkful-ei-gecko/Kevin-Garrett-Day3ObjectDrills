'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
}


function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;

  return obj;
}

function makeStudentsReport(data) {
  return data.map(d => `${d.name}: ${d.grade}`);
}

function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course,
    };
  });
}

function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  for (let i = 0; i < expectedKeys.length; i++) {
    if (Object.keys(object).find(key => key === expectedKeys[i])) {
      return true;
    }
  }
}

const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return this.water / this.flour * 100;
  }
}

console.log(`flour: ${loaf.flour} water: ${loaf.water}`);
console.log(loaf.hydration());