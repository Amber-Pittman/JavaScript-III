/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. During Global Binding, the value of `this` will be the Window/Console Object. For example,
 the console output will have `Window {postMessage: f, blur: f, ...}`.
* 2. Whenever a function is called by a preceding dot `.`, the object to the left of the dot gets
`this`.
* 3. 
* 4. 
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

// Principle 4

// code example for Explicit Binding