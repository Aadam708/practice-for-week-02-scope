/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// Your code here

const smoothieMachine = (...smoothies) => {

  const sentence = "I'm having a smoothie with".split(" ")

  smoothies.shift()


  smoothies.forEach(smoothie => {

    sentence.push(smoothie, "and")
  })

  return function (...new_smoothies) {

    new_smoothies.forEach((new_smoothie, i) => {


      if (i !== new_smoothies.length){

        sentence.push(new_smoothie, "and")
      }

      else{
        sentence.push(new_smoothie)
      }

      return sentence.join(" ")
    })

  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
