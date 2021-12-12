

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const btnRemove = document.getElementById("remove")
const btnRemoveEvil = document.getElementById("remove-evil")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]



// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
function fillList() {
    guests.forEach(function (item) {
        let li = document.createElement('li');
        guestList.appendChild(li);
        
        li.innerHTML += item;
    });
}

fillList()

btn.addEventListener("click", function() {

    guests.push(input.value);
    let li = document.createElement('li');
    guestList.appendChild(li);
    
    li.innerHTML += input.value;
    input.value = '';
    input.focus();
})

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
btnRemove.addEventListener("click", function() {

    if (guestList.hasChildNodes()) {
        guestList.removeChild(guestList.childNodes[guestList.childNodes.length - 1]);
    }
})

btnRemoveEvil.addEventListener("click", function() {
    if (guestList.hasChildNodes()) {
        guestList.removeChild(guestList.childNodes[8]);
    }
})
