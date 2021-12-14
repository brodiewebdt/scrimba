const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const btnTool = document.getElementById("btn-tool")

const tools = [
  "🔨",
  "🧃",
  "🪓",
  "☕",
  "🍗",
  "⛏️",
  "🔧",
  "🍕",
  "🗡️",
  "🥪",
  "🏹",
  "🍦",
]

btn.addEventListener("click", duplicateElf)

function duplicateElf() {
  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
btn.addEventListener("click", function () {
  elf.textContent += "🧝"
  // elf.textContent += tools[0]
})

btnTool.addEventListener("click", function () {
  // elf.textContent += '🧝'
  // elf.textContent += tools[1]
  const num = Math.floor(Math.random() * tools.length)
  elf.textContent += tools[num]
})
