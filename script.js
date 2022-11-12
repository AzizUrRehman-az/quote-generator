let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btnGenerate = document.getElementById("btn");

let quotes = [
  "And now that you don'/t have to be perfect, you can be good",
  "Don't cry because it'/s over. Smile because it happened",
  "Everything is hard before it is easy",
  "Anyone who has never made a mistake has never tried anything new",
  "Don't let your happiness depend on something you may lose",
  "We are all broken, that's how the light gets in",
];
let authors = [
  "John Steinbeck",
  "Dr. Seuss",
  "Johann Wolfgang von Goethe",
  "Albert Einstein",
  "C.S. Lewis",
  "Ernest Hemingway",
];
btnGenerate.addEventListener("click", function () {
  let randomNumbers = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomNumbers];
  author.textContent = authors[randomNumbers];
});
