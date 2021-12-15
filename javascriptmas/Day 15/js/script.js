

const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    },
    {
        language: "French",
        greeting: "Joyeux Noël!"
    },
    {
        language: "German",
        greeting: "Frohe Weinachten!"
    },
]

function translate(){
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    function extractGreeting(arr, prop) {

        // extract value from property
        let extractedGreeting = arr.map(item => item[prop]);
    
        return extractedGreeting;
    
    }    
    // passing an array of objects and property 'language' to extractGreeting
    const result = extractGreeting(greetingsArr, 'language');

    switch(true) {
        case (result[0] === languageSelector.value):
            greetingDisplay.textContent = 'Merry Christmas';
            break;
        case (result[1] === languageSelector.value):
            greetingDisplay.textContent = 'Feliz Navidad'
            break;
        case (result[2] === languageSelector.value):
            greetingDisplay.textContent = 'щасливого Різдва!'
            break;
        case (result[3] === languageSelector.value):
            greetingDisplay.textContent = 'Nadolig Llawen!'
            break;
        case (result[4] === languageSelector.value):
            greetingDisplay.textContent = 'Joyeux Noël!'
            break;
        case (result[5] === languageSelector.value):
            greetingDisplay.textContent = 'Frohe Weinachten!'
            break;
        }
}

