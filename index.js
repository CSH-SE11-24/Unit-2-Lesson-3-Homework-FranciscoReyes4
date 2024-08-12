// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "pardon"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let user = prompt("Guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word

if (word.includes(user)) {
  console.log("Good")
} else {
  console.log("try again")
}

// Prompt the user to guess the word 
let user2 = prompt("Guess the word")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (user2 == word) {
  console.log("Good")
} else {
console.log("Nope")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (user2 != word) {
  let user = prompt("Guess a letter")

  if (word.includes(user)) {
    console.log("Good you on to something")
  } else {
    console.log("try again")
  }

  if (user2 == word) {
    console.log("Good job you got the word jit!")
  } else {
    user2 = prompt(" Nah Guess Again")

  }
    
  

  attempts++



}

// In the while loop, copy the prompt and if/else check for the word

console.log(`It took you ${attempts} attempts`)
// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts"

