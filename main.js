import { Apple, Person } from './components'
import Menu from './menu.js'

const appleModel = new Apple({
  model: 'IphoneX'
}).getModel()

// const presonModel = new Preson({
//   name: 'IphoneX'
// }).getName()

console.log(appleModel)

var V8Engine = (function () {
  function V8Engine () {}
  V8Engine.prototype.toString = function () { return 'V8' }
  return V8Engine
}())
var V6Engine = (function () {
  function V6Engine () {}
  //V6Engine.prototype = V8Engine.prototype // <---- side effect
  V6Engine.prototype.toString = function () { return 'V6' }
  return V6Engine
}())
console.log(new V8Engine().toString())
//console.log(new V6Engine().toString())
