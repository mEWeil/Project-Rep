//SESSION 1
//variables

//let firstName = Matthew
//let lastName = Weil
//const bDay = 3/23/95

//SESSION 2
//data types

//numbers

//console.log(420)
//console.log(3.14)

//strings

//console.log('suck it') //single quotes
//console.log("to the root") //double qoutes
//console.log(`oh yeah`) // back ticks

//booleans

//console.log(true)
//console.log(false)

//undefined

//console.log(undefined) //no value yet

//null

//console.log(null) //no value

//typeof operater

//console.log(typeof 'hello')

//math operater

//console.log(3.14 * 87) //multiplication
//console.log(425 / 36) // division
//console.log(54637 + 654783292) //plus
//console.log(674865382698 - 762767642679680) //minus
//console.log(2 ** 4) //to the power of
//console.log(37 % 5) //remainder

//logical operaters

//console.log(5  == 5) // is equal to?
//console.log(5 !== 5) //is not equal to?
//console.log(5 > 6) // is greater than?
//console.log(5 < 6) // is less than?
//console.log(5 >= 5) // is greater than or equal to?
//console.log(5 <= 5) // is less than or equal to?
//console.log(5 === '5') // is same value and same data type?
//console.log(5 > 10 || 5 > 2) // is this statement OR this staement true?
//console.log(5 < 10 && 5 > 2) // is this statement AND this statement true? 

//string interpolation

//let x = 5
//let y = 10

//console.log(`is ${x} greater than ${y}? that is a ${ x > y} statement.`)
//console.log(`what is ${x} times ${y}? It is ${ x * y}.`)

// let firstName = 'Matthew'
// let lastName = 'Weil'
//let currentCity = 'Valencia'

//console.log(`Hi, my name is ${firstName} ${lastName}, and I currently live in ${currentCity}`)

//SESSION 3
//conditional logic ( if / else if / else)

//let date = 4/21

//if (date === 4/20) {console.log('smoke weed!')} else {console.log('smoke weed anyway!')}

//let isStoned = true
//let isShmammered = false

//if (isStoned === true && isShmammered === true) {console.log('drink some damn water')} 
 // else if (isStoned === true && isShmammered === false) {console.log('grab a beer')}
    //else if ( isStoned === false && isShmammered === true) {console.log('grab a blunt')} 
      //else if ( isStoned === false && isShmammered === false) {console.log('grab a beer and a blunt')}

//Conditional Operater (ternary operater)

// let age = 27

//console.log( age >= 21 ? 'booze!' : 'boo!')

// <- single line comment

/*
multiple line comment
nothing in here will be ran
.
.
.
.
*/


//Arrays

//let orkKlans = ['bad moons' , 'goffs' , 'free bootaz' , 'evil suns' , 'snake bites' , 'blood axes'] 

//console.log(orkKlans)
//console.log(Array.isArray(orkKlans))

//orkKlans[1] = 'Ghaz'
//console.log(orkKlans)

//add to end of array
//orkKlans.push('grots')
//orkKlans.push('squigs')
//console.log(orkKlans)

//remove from end of array

//console.log(orkKlans)
//orkKlans.pop()
//console.log(orkKlans)
//orkKlans.pop()
//console.log(orkKlans)

//add to front of array

//console.log(orkKlans)
//orkKlans.unshift('grots')
//console.log(orkKlans)
//orkKlans.unshift('squigs') 
//console.log(orkKlans)

//remove from front of array

//console.log(orkKlans)
//orkKlans.shift()
//console.log(orkKlans)
//orkKlans.shift()
//console.log(orkKlans)

//-------Array Methods-------

//let alpha = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']
//console.log(alpha)
//pop() push() shift() unshift()

//SLICE - [ 'b' , 'c' , 'd' ] - does not change original array
//let values = alpha.slice(1 , 4)
//let values = alpha.slice(0 , 4)
//console.log(values)

//SPLICE - changes the original array
//alpha.splice (2 , 1) //starting at value in entry 2, removing 1
//alpha.splice (2 , 1 , '5') //starting at value in entry 2, removing 1 and replacing it with '5'
//console.log(alpha)

//indexOf - finds an index of an element in the array
//let indexOfletter = alpha.indexOf('d')
//console.log(indexOfletter)

//remove all elements of the array after the value of 'e'
//let idxOfE = alpha.indexOf('e') //setting idxOfE as a value that reads the numerical index of 'e' from array 'alpha'
//console.log(idxOfE) //prints the numerical index of 'e' to the console
//alpha.splice(idxOfE+1) //from array 'alpha', splice out everything after the numerical index of 'e'+ 1
//console.log(alpha) //print the now spliced array

//nested arrays

//let movieInfo = [
 // [ 1 , 2 , 3 ] , 
 //   [ 'The Lord of the Rings' , 'The Matrix' , 'The Big Lebowski' ] ,
  //    [ '2001' , '1999' , '1998' ]
//] //nested array with arrays as values within the array, arrayception if you will...
//console.log(movieInfo [1] [2]) // the big lebowski
//console.log(movieInfo [2] [1]) // 1999

//let nestedArray = [ 'A' , [ 10 , 20 , 30 ] , 100 , [[ 'five' , 'six' ]]]
//console.log(nestedArray [3][0][1]) // six

//objects - when making an array, the computer only knows the index of the values with in the array, not what those values are or how they are categorized. for this we use objects 'obj'

//let movieObj = { 'title' : 'The Lord of the Rings' , 'year' : 2001 , 'gross' : '$891 million'}

//dot notation
//console.log(movieObj.title)
//console.log(movieObj.year)
//console.log(movieObj.gross)

//bracket notation
//console.log(movieObj['title'])
//console.log(movieObj['year'])
//console.log(movieObj['gross'])

//dynamic keys using bracket notation

//let movieTitle = 'title'
//let movieYear = 'year'
//console.log(movieObj[movieTitle])
//console.log(movieObj[movieYear])

//changing values using bracket notation

//movieObj['title'] = 'The Matrix'
//movieObj['year'] = 1999
//console.log(movieObj)

//adding keys and values

//movieObj['leadActor'] = 'Keanu Reeves'
//console.log(movieObj)

//Does lead actor exist as a key in the object?

//if ('leadActor' in movieObj) {
//  console.log(movieObj.leadActor)
//} else {
// movieObj['leadActor'] = 'Keanu Reeves'
//       }
//console.log(movieObj.leadActor)

//Objects: built in methods
//let movieObj = { 'title' : 'The Lord of the Rings' , 'year' : 2001 , 'gross' : '$891 million'}

//Object.keys() will return an array of keys
//console.log(Object.keys(movieObj)) // -> 'title' 'year' 'gross'

//Object.values() will return an array of values
//console.log(Object.values(movieObj)) // -> 'TLotR' '2001' '$891 million'

//Object.entries() will return a nested array of keys and values
//console.log(Object.entries(movieObj)) // -> 'title' : 'The Lord of the Rings' , 'year' : 2001 , 'gross' : '$891 million'

// functions

//declaring a function/set of instructions
//function sayHelloWorld() {
 // console.log('Hello World!')
//}

//Invoking a function
//sayHelloWorld() // -> Hello World!

//passing in parameters
//function sayHello ( firstName , lastName ){
  //console.log( `Hi ${firstName} ${lastName}`)
// }

//Invoking functions with parameters

// sayHello( "Matthew" , "Weil" ) // -> Hi Matthew Weil
// sayHello( 'Monica' , 'Weil' ) // -> Hi Monica Weil

// Returning a value with functions

function addition(num1 , num2){
    return num1 + num2
    }
 addition(3 , 5)