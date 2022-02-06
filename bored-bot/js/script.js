

document.querySelector(".btn-select").addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".activity").textContent = data.activity;
            document.querySelector(".container").classList.add('fun');
        });
});
