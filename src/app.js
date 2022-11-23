/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let x = 0; x < pronoun.length; x++) {
  for (let y = 0; y < adj.length; y++)
    for (let z = 0; z < noun.length; z++)
      console.log(pronoun[x] + adj[y] + noun[z] + ".com");
}

function domainGenerator(arr1, arr2, arr3) {
  let domain =
    arr1[numRandom(arr1)] +
    arr2[numRandom(arr2)] +
    arr3[numRandom(arr3)] +
    ".com";
  return domain;
}
function numRandom(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return random;
}

console.log(domainGenerator(pronoun, adj, noun));
