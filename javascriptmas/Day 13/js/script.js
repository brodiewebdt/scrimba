
const numOfPeople = document.getElementById('num-input')
const btn = document.getElementById("btn")
let food = document.getElementById("food")
const vegetarian = document.getElementById('vegetarian-input')

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

btn.addEventListener('click', function() {
   if (vegetarian.checked  && numOfPeople.value == false) {
       food.textContent = 'Vegetarian Cup O Soup'
   } else if (vegetarian.checked &&  numOfPeople.value <= 10) {
    food.textContent = 'Nut Roast'
   } else if (numOfPeople.value == false){
    food.textContent = 'Cup O Soup'
   } else if (numOfPeople.value > 0 &&  numOfPeople.value < 5) {
    food.textContent = 'Turkey' 
   } else if (numOfPeople.value >= 5 &&  numOfPeople.value <= 10) {
    food.textContent = 'Turduckin'
   } else {
       food.textContent = 'at a restaurant'
   }

})
