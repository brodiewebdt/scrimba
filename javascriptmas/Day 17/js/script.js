

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const input = document.getElementById("input")
const attitude = document.getElementById("attitude")
// btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    },
    {
        name: "Bill",
        hasBeenGood: false
    },
    {
        name: "Susan",
        hasBeenGood: true
    },
    {
        name: "Frances",
        hasBeenGood: false
    },
    {
        name: "Roger",
        hasBeenGood: true
    }
]

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

function sort() {
    for(let i = 0; i < sorteesArr.length; i++) {
        if(sorteesArr[i].hasBeenGood === true) {
            let li = document.createElement('li')
            li.textContent = sorteesArr[i].name;
            niceList.append(li)
        } else {
            let li = document.createElement('li')
            li.textContent = sorteesArr[i].name;
            naughtyList.append(li)
        }
    }
}

btn.addEventListener('click', function() {
    naughtyList.textContent = ''
    niceList.textContent = ''
    sort()
    
});

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

btnPerson.addEventListener("click", function() {
    naughtyList.textContent = ''
    niceList.textContent = ''
    

    let person = input.value
    // Change select string to a Boolean value
    let naughtyOrNice = eval(attitude.value)
    sorteesArr.push(
    {
        name: person, hasBeenGood: naughtyOrNice
    },
    )
    input.value = '';
    input.focus();

    sort()
})





