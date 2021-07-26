// function myLogger() {
//   console.log(42);
// }

// myLogger()

// ==============================

// ==============================

// let lapsCompleted = 0

// function lapsincrimentLap() {
//   lapsCompleted = lapsCompleted + 1
// }

// lapsincrimentLap()
// lapsincrimentLap()
// lapsincrimentLap()

// console.log(lapsCompleted);

// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 13: Increment on clicks
// ==============================

// let count = 0

// function increment() {
//   console.log("clicked")
//   count = count + 1
//   console.log(count)

// }

// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 14: Display the count
// ==============================

// let countEl = document.getElementById("count-el")
// //console.log(countEl) -> <h2 id="count-el">0</h2> 
// let count = 0

// function increment() {
//   count = count + 1
//   // HTMLタグを取り除き count を代入する
//   countEl.innerText = count 
// }

// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 15: The Document Object Model
// ==============================


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 16: Display the count with innerText
//  Lesson 17: Create the save button
// ==============================

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//   count = count + 1
//   countEl.innerText = count 
// }

// function save() {
//   console.log(count)
// }


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 18: What is a strings?
//  Lesson 19: Write your first string variable
// ==============================

// let username = "per"
// let message = "You have tree new notifications"

// console.log(username)
// console.log(message + ", " + username + "!")

// // Create a variable, messageToUser, thet contains the message we have logged
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 20: Log a greeting to the console
// ==============================

// let name = "mamiline6"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 21: Strings vs. Numbers
// ==============================


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 22: Render a welcom message
// ==============================

// let welcomeEl = document.getElementById("welcome-el")

// let name = "mamiline6"
// let greeting = "Welcome back "

// function message() {
//   welcomeEl.innerText = greeting + name
// }

// message()


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 23: Improve the message with string concatenatioin
// ==============================

//// Add an emoji to the end! 👋
//// HINT: count = count + 1

// welcomeEl.innerText = greeting + name　+ "👋"    // MY ANSWER
// welcomeEl.innerText = welcomeEl.innerText + "👋" // ANSWER
// welcomeEl.innerText += "👋"                      // OTHER ANSWER


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 24: User plus equal for count -> Lesson 17
//  Lesson 25: Create the save feature
//  Lesson 26: Debugging online
// ==============================

// let countEl = document.getElementById("count-el")
// let saveEl  = document.getElementById("save-el")
// let count = 0

// function increment() {
//   count += 1
//   countEl.innerText = count 
// }

// function save() {
//   saveEl.innerText += count + " - "
//   countEl.innerText = 0 // カウントリセット
// }


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 26: Debugging online
// ==============================

// let countEl = document.getElementById("count-el")
// let saveEl  = document.getElementById("save-el")
// let count = 0

// function increment() {
//   count += 1
//   countEl.textContent = count 
// }

// function save() {
//   saveEl.textContent += count + " - "
//   // countEl.textContent = 0 // カウントリセット
// }


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 27: Set the count to 0
// ==============================

// let countEl = document.getElementById("count-el")
// let saveEl  = document.getElementById("save-el")
// let count = 0

// function increment() {
//   count += 1
//   countEl.textContent = count 
// }

// function save() {
//   saveEl.textContent += count + " - "
//   countEl.textContent = 0 // カウントリセットできない
//   count = 0               // jsは前の状態を覚えてる
// }


// ==============================
//　Sectcion 1: Build a passenger counter app
//  Lesson 28: Congrats & recap
// ==============================


// ==============================
//　Sectcion 2: Practice time
//  Lesson 1: 
// ==============================

// let firstName = "o "
// let lastName  = "mamiline6"
// let fullName = firstName + lastName
// console.log(fullName)


// ==============================
//　Sectcion 2: Practice time
//  Lesson 2: Contatenate two strings in a function
// ==============================

// let name = "Linda"
// let greeting = "Hi there"

// function called() {
//   console.log(greeting + ", " + name + "!")
// }

// called()


// ==============================
//　Sectcion 2: Practice time
//  Lesson 3: Incrementing and dicrementing
// ==============================

// let myPoints = 3

// function add3Points() {
//   myPoints += 3
// }

// function remove1Point() {
//   myPoints -= 1
// }

// add3Points()   // 6
// add3Points()   // 9
// remove1Point() // 8
// remove1Point() // 7
// add3Points()   // 10

// console.log(myPoints) // logs out 10


// ==============================
//　Sectcion 2: Practice time
//  Lesson 4: Strings and numbers
// ==============================

// console.log("My points:" + 5 + 9) // My points: 59 間違えた ＞ 14


// ==============================
//　Sectcion 2: Practice time
//  Lesson 5: Rendering an error message
// ==============================

// let errorMassageEl = "Something went wrong, please try again."
// let errorEl = document.getElementById("error")

// function insertErrorMassage() {
//   errorEl.textContent = errorMassageEl
// }


// ==============================
//　Sectcion 2: Practice time
//  Lesson 6: Calculator challenge
// ==============================

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let resultEl = document.getElementById("sum-el")

// function add() {
//   resultEl.textContent = num1 + num2
// }

// function subtract() {
//   resultEl.textContent = num1 - num2
// }

// function divide() {
//   resultEl.textContent = num1 / num2
// }

// function multiply () {
//   resultEl.textContent = num1 * num2
// }


// ==============================
//　Sectcion 3: Building a Blackjack game
//  Lesson 2: Add the firstCard, secondCard, and sum
//  Lesson 3: if...else conditionals
//  Lesson 4: Your first if...else statement
//  Lesson 5: if/else if/else statement
//  Lesson 6: The if...else statement for our game
//  Lesson 7: Add the hasBlackjack variable
//  Lesson 8: Add the isAlive variable
//  Lesson 9: Let's practice boolean conditions
//  Lesson 10: Add the message variable
// ==============================

let firstCard  = 10
let secondCard = 0
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum <= 20) {
  message = "Do your want to draw a new card? 🙂"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackjack = true
} else {
  message = "You've out of the game! 😭"
  isAlive = false
}

console.log(message)

//  Lesson 4: Your first if...else statement
// let age = 20

// if (age < 21) {
//   console.log("You can not enter the club!")
// } else {
//   console.log("Welcome!")
// }

//  Lesson 5: if/else if/else statement
// let age = 100

// if (age < 100) {
//   console.log("Not elegible")
// } else if (age === 100 ) {
//   console.log("Here is your birthday card from the King!")
// } else {
//   console.log("Not elegible, you have already gotten one")
// }