
const button = document.getElementById('button');
const name = document.getElementById('meal-name');
const image = document.getElementById('image');
const imageContainer = document.getElementById('image-container');

const api = "https://foodish-api.herokuapp.com/api/images/";

const meals = ['biryani', 'burger', 'dosa', 'idly', 'pizza'];

// Find 3 methods of calling an api below - uncomment each method to test

// Method 1 - XMLHttpRequest
function getRandomMeal() {
    var randomMeal = meals[Math.floor(Math.random() * meals.length)];
    
    const request = new XMLHttpRequest();
    
    request.open("GET", api + randomMeal);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            let response = JSON.parse(request.response);
            name.innerHTML = randomMeal.charAt(0).toUpperCase() + randomMeal.slice(1);
            image.src = response.image;
            imageContainer.style.display = 'block';
        } else {
            console.log("Error", request);
        }
    }
}



const btn = document.getElementById("btn")
const foodHolder = document.getElementById("foodHolder");
btn.addEventListener("click", findYum)
    
 async function findYum(){
    const dessert = await (await fetch("https://foodish-api.herokuapp.com/api/images/dessert")).json();
    foodHolder.innerHTML = `<img src=${dessert.image} alt="" />`   
};




// Method 2 - Fetch
// function getRandomMeal() {
//     var randomMeal = meals[Math.floor(Math.random() * meals.length)];
    
//     fetch(api + randomMeal)
//         .then((response) => {
//             return response.json();
//         })
//         .then((meal) => {
//             name.innerHTML = randomMeal.charAt(0).toUpperCase() + randomMeal.slice(1);
//             image.src = meal.image;
//             imageContainer.style.display = 'block';    
//         });
// }

// Method 3 - Axios
// function getRandomMeal() {
//     var randomMeal = meals[Math.floor(Math.random() * meals.length)];
    
//     axios.get(api + randomMeal)
//         .then((response) => {
//             name.innerHTML = randomMeal.charAt(0).toUpperCase() + randomMeal.slice(1);
//             image.src = response.data.image;
//             imageContainer.style.display = 'block';
//         })
//         .catch((error) => {
//             console.log("Error", error);
//         });
// }

button.addEventListener('click', getRandomMeal);