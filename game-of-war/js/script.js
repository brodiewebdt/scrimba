let deckId;
let cards = [];
document.querySelector(".draw-cards").style.display = "none";
const cardContainer = document.querySelector(".cards");
const gameTitle = document.querySelector(".game-title");
const newDeckBtn = document.querySelector(".new-deck");
const drawCardsBtn = document.querySelector(".draw-cards");
const remainingCards = document.querySelector(".remaining-cards");
const computerScoreDisplay = document.querySelector(".computer-score");
const userScoreDisplay = document.querySelector(".user-score");
let computerScore = 0;
let userScore = 0;

// const fetchDeck = () => {
//     fetch(`https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/`)
//         .then((res) => res.json())
//         .then((data) => {

//             remainingCards.textContent = `Remaining Cards: ${data.remaining}`;
//             drawCardsBtn.disabled = false;

//             computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
//             userScoreDisplay.textContent = `Your Score: ${userScore}`;

//             deckId = data.deck_id;
//             cards = data.cards;
//             console.log(data);
//             document.querySelector(".draw-cards").style.display = "block";
//         });
// };

const fetchDeck = async () => {
    const response = await fetch(
        `https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/`,
    );
    const data = await response.json();
    remainingCards.textContent = `Remaining Cards: ${data.remaining}`;
    drawCardsBtn.disabled = false;

    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    userScoreDisplay.textContent = `Your Score: ${userScore}`;

    deckId = data.deck_id;
    cards = data.cards;
    console.log(data);
    document.querySelector(".draw-cards").style.display = "block";
};

newDeckBtn.addEventListener("click", fetchDeck);

// drawCardsBtn.addEventListener("click", () => {
//     fetch(
//         `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`,
//     )
//         .then((res) => res.json())
//         .then((data) => {
//             remainingCards.textContent = `Remaining Cards: ${data.remaining}`;

//             cardContainer.innerHTML = `
//                 <div class="card-holder one"><img src=${data.cards[0].image}></div>
//                 <div class="card-holder two"><img src=${data.cards[1].image}><div>
//             `;

//             cards = data.cards;
//             // console.log(cards);

//             console.log(data.cards[0].value);
//             let card1 = data.cards[0].value;
//             console.log(data.cards[1].value);
//             let card2 = data.cards[1].value;

//             const winningDraw = determineWinner(data.cards[0], data.cards[1]);
//             gameTitle.textContent = winningDraw;

//             if (data.remaining === 0) {
//                 drawCardsBtn.disabled = true;
//                 if (computerScore > userScore) {
//                     gameTitle.textContent = `Computer Wins: ${computerScore} to ${userScore}`;
//                 } else if (computerScore < userScore) {
//                     gameTitle.textContent = `You Win: ${userScore} to ${computerScore}`;
//                 } else {
//                     gameTitle.textContent = `Tie Game: ${userScore} to ${computerScore}`;
//                 }

//             }
//         });
// });

const cardDraw = async () => {
    const response = await fetch(
        `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`,
    );
    const data = await response.json();
    remainingCards.textContent = `Remaining Cards: ${data.remaining}`;

    cardContainer.innerHTML = `
                <div class="card-holder one"><img src=${data.cards[0].image}></div>
                <div class="card-holder two"><img src=${data.cards[1].image}><div>               
            `;

    cards = data.cards;
    // console.log(cards);

    console.log(data.cards[0].value);
    let card1 = data.cards[0].value;
    console.log(data.cards[1].value);
    let card2 = data.cards[1].value;

    const winningDraw = determineWinner(data.cards[0], data.cards[1]);
    gameTitle.textContent = winningDraw;

    if (data.remaining === 0) {
        drawCardsBtn.disabled = true;
        if (computerScore > userScore) {
            gameTitle.textContent = `Computer Wins: ${computerScore} to ${userScore}`;
        } else if (computerScore < userScore) {
            gameTitle.textContent = `You Win: ${userScore} to ${computerScore}`;
        } else {
            gameTitle.textContent = `Tie Game: ${userScore} to ${computerScore}`;
        }
    }
};

drawCardsBtn.addEventListener("click", cardDraw);

function determineWinner(card1, card2) {
    const cardValues = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "JACK",
        "QUEEN",
        "KING",
        "ACE",
    ];
    const user1 = cardValues.indexOf(card1.value);
    const user2 = cardValues.indexOf(card2.value);

    // console.log(cardValues.indexOf(one) + 2);
    // console.log(cardValues.indexOf(two) + 2);
    // console.log(card1, card2);
    console.log(user1, user2);

    if (user1 > user2) {
        console.log(`Computer wins!`);
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        console.log(`Computer Score: ${computerScore}`);
        return `Computer wins!`;
    } else if (user1 < user2) {
        console.log(`You win!`);
        userScore++;
        userScoreDisplay.textContent = `Your Score: ${userScore}`;
        console.log(`Your Score: ${userScore}`);
        return `You win!`;
    } else {
        console.log(`War!`);
        return `War!`;
    }
}
