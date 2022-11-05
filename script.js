const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const place3 = document.getElementById("place3");
const btn = document.querySelector("button");

btn.addEventListener("click", klobet);


function klobet() {
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
            place1.innerHTML = quote.anime;
            place2.innerHTML = quote.character;
            place3.innerHTML = `"${quote.quote}"`;
    })
};