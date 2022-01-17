
// Variables
const input = document.querySelector('input');
const btn = document.querySelector('button');

const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Functions
function shoppingList() {

    items.forEach(function (item) {
        
        checklist.innerHTML += `
            <div class="checklist-item">
                <input type="checkbox" id="${item}">
                <label for="${item}" class="strikethrough">${item}</label>
            </div>
        `
    });

}

shoppingList()

// Event Listener
btn.addEventListener('click', function() {
    checklist.innerHTML = '';
    let itemAdded = input.value;
    items.push(itemAdded);
    shoppingList()
    input.value = '';
    input.focus();
})
