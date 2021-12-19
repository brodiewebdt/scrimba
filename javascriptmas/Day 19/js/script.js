
const btn = document.getElementById("btn")
const foodHolder = document.getElementById('foodHolder')
const img = document.createElement('img');

function findYum() {

    fetch('https://foodish-api.herokuapp.com/api/images/dessert')
    .then(response => response.json())
    .then((dessert) => {
        
        foodHolder.appendChild(img)
        img.src = dessert.image;

    });
}

btn.addEventListener("click", findYum)


