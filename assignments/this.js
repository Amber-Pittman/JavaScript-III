/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. During Global Binding, the value of `this` will be the Window/Console Object. For example,
 the console output will have `Window {postMessage: f, blur: f, ...}`.
* 2. Whenever a function is called by a preceding dot `.`, the object to the left of the dot gets
`this`.
* 3. Whenever a constructor function is used, `this` refers to the specific instance of the object
that is created and returned by the constructor function.
* 4. Whenever JavaScript's `.call()` or `.apply()` method is used, `this` is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function aGirlHasNo(name) {
    console.log(this);
    return name;
}
aGirlHasNo("Name");

// Principle 2
// code example for Implicit Binding

const yourObj = {
    sing: "Hello",
    singHello: function(name) {
        console.log(`${this.sing} is it ${name} you're looking for?`);
        console.log(this);
    }
};
yourObj.singHello("me");

// Principle 3
// code example for New Binding

function rudeDude (offender) {  //This is the constructor function
    this.offense = "Screw off, ";
    this.offender = offender;
    this.speak = function () {
        console.log(this.offense + this.offender);
        console.log(this);
    };
}

const hellsAngel = new rudeDude("Lucifer");
hellsAngel.speak();

// Principle 4
// code example for Explicit Binding
function supernatural (offender) {  //This is the constructor function
    this.offense = "Bugger off, ";
    this.offender = offender;
    this.argue = function () {
        console.log(this.offense + this.offender);
        console.log(this);
    };
}

const kingOfHell = new supernatural("Crowley");
const winchester = new supernatural("Dean");

kingOfHell.argue.call(winchester);
winchester.argue.apply(kingOfHell);

