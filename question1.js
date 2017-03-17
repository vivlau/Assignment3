/*
QUESTION1: RUBY HASHES
Implement a Ruby like hash in Javascript. Use Object as base to get behaviour.
Name the class Hash.
Constructor will take object as argument.
Add support for the following ruby Hash methods as prototype methods:
  .isEmpty
  .merge
  .hasKey
  .invert
  .inspect
  .keys
  .values
All methods that return a hash must return a new Hash object.
*/

class Hash {
  constructor(object) {
    this.object = object;
  }
  isEmpty() {
    if (Object.keys(this.object).length === 0 && this.object.constructor === Object) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
    // if (this.object !== null) {
    //   console.log(false);
    // } else {
    //   console.log(true);
    // }

  merge(newObject) {
    let target = Object.assign({}, this.object)
    return Object.assign(target, newObject.object);
  }
  hasKey(string) {
    console.log(this.object.hasOwnProperty(string));
  }
  invert() {
    let newArray = [];
    for ( let key in this.object ){
      let value = this.object[key];
      newArray[value] = key;
    }
    let newHash = {};
    for (let i = 1; i < newArray.length; ++i)
    newHash[i] = newArray[i];
    console.log(newHash);
  }
  inspect() {
    console.log(Object.entries(this.object));
  }
  keys() {
    console.log(Object.keys(this.object));
  }
  values() {
    console.log(Object.values(this.object));
  }
}

// TEST
let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

hash.isEmpty(); // returns false
emptyHash.isEmpty(); // returns true

let merged = new Hash({});
merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));

console.log(merged);
// // returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// // should not mutate original hash

merged !== hash; // should be true

hash.hasKey('a'); // returns true
hash.hasKey('bob'); // returns false
//merged.hasKey('bob'); // returns true

// // Values will have to made into strings
hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}
hash.inspect() // returns "{'a' => 1, 'b' => 2, 'c' => 3}"

hash.keys() // returns ['a', 'b', 'c']
hash.values() // returns [1, 2, 3]
