export class Person {
  constructor ({ name, age, sex }) {
    this.className = 'Person'
    this.name = name
    this.age = age
    this.sex = sex
  }
  getName () {
    this.name = 'Person';
    return this.name
  }
}
export class Apple {
  constructor ({ model }) {
    this.className = 'Apple'
    this.model = model
  }
  getModel () {
    return this.model
  }
}

// export function unused () {
//   window.prototype.test = 1;
//   console.log('unused');
// }

var use = (function () {
  function use () {}
  use.prototype.toString = function () { return 'use' }
  return use
}())

export const unused = (function () {
  function unused2 () {}
  //unused.prototype = use.prototype;
  unused2.toString = function () { return 'unused' }
  
  return unused2
}())

//console.log(new use().toString())