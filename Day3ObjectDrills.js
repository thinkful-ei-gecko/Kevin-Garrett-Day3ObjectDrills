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
};

//console.log(`flour: ${loaf.flour} water: ${loaf.water}`);
//console.log(loaf.hydration());

const obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

for (const key in obj) {
  //console.log(obj, obj[key]);
}

const humans = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

//console.log(humans.meals[4]);

const obj1 = {
  name: 'Garrett',
  jobTitle: 'Student/Husband'
};

const obj2 = {
  name: 'Kevin',
  jobTitle: 'Student/Dad'
};

const obj3 = {
  name: 'Frodo',
  jobTitle: 'Hobbit'
};

const arr = [obj1, obj2, obj3];

arr.map(a => {
  //console.log(a.name, a.jobTitle);
});

// yes this works the same way
arr.forEach(a => {
  //console.log(a.name, a.jobTitle);
});



obj3.boss = 'boss';
obj1.boss = 'boss';

arr.map(a => {
  if (!a.hasOwnProperty('boss')) {
    //console.log(`${a.jobTitle} ${a.name} doesn't report to anybody.`)
  } else {
    //console.log(`${a.jobTitle} ${a.name} reports to ${a.boss}.`);
  }
});

// this also works
arr.map(a => {
  if (!('boss' in a)) {
    //console.log(`${a.jobTitle} ${a.name} doesn't report to anybody.`)
  } else {
    //console.log(`${a.jobTitle} ${a.name} reports to ${a.boss}.`);
  }
});

function decode(word) {
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };

  return (word[0] in cipher) ? word[cipher[word[0]] - 1] : ' ';

  // step 0: does key exist in cipher? (word[0] in cipher)
  // step 1: get key in cipher: key === word[0]
  // step 2: get value in cipher at the key: cipher[word[0]] (cipher[key] === the value)
  // step 3: minus 1: cipher[word[0]] - 1
  // step 4: get the nth letter in word (n is what we got in step 3): word[cipher[word[0]] - 1]
}

function decodeWords(words) {
  return words
    .split(' ')
    .map(word => decode(word))
    .join('');
}

decodeWords('craft block argon meter bells brown croon droop');

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,

    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },

    evaluateFight(character) {
      return `Your opponent takes ${Math.max(0, this.attack - character.defense)} and you receive ${Math.max(0, character.attack - this.defense)} damage`;
    }
  }
}

const characters = [
  createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 ),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 5, 5));

characters.find(c => c.nickname === 'aragorn').describe();

const Hobbits = characters.filter(c => c.race === 'Hobbit');

const highAttackers = characters.filter(c => c.attack > 5);

