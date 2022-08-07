const btnGeneratePasswords = document.querySelector(".btn-passwords");
const btnCopyPasswordOne = document.querySelector(".copy-password-one");
const btnCopyPasswordTwo = document.querySelector(".copy-password-two");
const passwordOne = document.querySelector(".password-one");
const passwordTwo = document.querySelector(".password-two");
const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

function generate() {
    for (i = 0; i < 15; i++) {
        const randomLetter =
            characters[Math.floor(characters.length * Math.random())];
        const randomLetterTwo =
            characters[Math.floor(characters.length * Math.random())];
        console.log(randomLetter);
        passwordOne.value += randomLetter;
        passwordTwo.value += randomLetterTwo;
    }
}

btnGeneratePasswords.addEventListener("click", () => {
    passwordOne.value = "";
    passwordTwo.value = "";
    generate();
});

btnCopyPasswordOne.addEventListener("click", () => {
    /* Select the text field */
    passwordOne.select();
    passwordOne.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(passwordOne.value);
});

btnCopyPasswordTwo.addEventListener("click", () => {
    /* Select the text field */
    passwordTwo.select();
    passwordTwo.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(passwordTwo.value);
});
