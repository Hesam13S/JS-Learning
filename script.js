"use strict";

let score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnnew = document.querySelector(".btn--new");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0;
let currentResult0 = 0;
let currentResult1 = 0;
let firstScore0 = 0;
let firstScore1 = 0;
let i = 0;
let j = 0;

diceEL.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (
    Number(score0EL.textContent) < 100 &&
    Number(score1EL.textContent) < 100
  ) {
    diceEL.classList.remove("hidden");
    const dice = Math.trunc(Math.random() * 6) + 1;
    if (player0.classList.contains("player--active")) {
      i++;
    } else {
      j++;
    }
    diceEL.src = `dice-${dice}.png`;
    console.log(dice);
    if (player0.classList.contains("player--active")) {
      currentScore += dice;
      if (dice !== firstScore0) {
        current0EL.textContent = currentScore;
      } else {
        if (player0.classList.contains("player--active")) {
          player0.classList.remove("player--active");
          player1.classList.add("player--active");
          current0EL.textContent = 0;
          currentScore = 0;
          firstScore0 = 0;
        } else {
          player0.classList.add("player--active");
          player1.classList.remove("player--active");
          current1EL.textContent = 0;
          currentScore = 0;
          firstScore1 = 0;
        }
      }
    } else if (player1.classList.contains("player--active")) {
      currentScore += dice;
      if (dice !== firstScore1) {
        current1EL.textContent = currentScore;
      } else {
        if (player0.classList.contains("player--active")) {
          player0.classList.remove("player--active");
          player1.classList.add("player--active");
          current0EL.textContent = 0;
          currentScore = 0;
          firstScore0 = 0;
        } else {
          player0.classList.add("player--active");
          player1.classList.remove("player--active");
          current1EL.textContent = 0;
          currentScore = 0;
          firstScore1 = 0;
        }
      }
    }

    if (
      Number(current0EL.textContent) === 0 &&
      player0.classList.contains("player--active")
    ) {
      firstScore0 = currentScore;
      i = 0;
    } else if (
      Number(current1EL.textContent) === 0 &&
      player1.classList.contains("player--active")
    ) {
      firstScore1 = currentScore;
      j = 0;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (
    Number(score0EL.textContent) < 100 &&
    Number(score1EL.textContent) < 100
  ) {
    if (player0.classList.contains("player--active")) {
      player0.classList.remove("player--active");
      player1.classList.add("player--active");

      i = 0;
    } else {
      player0.classList.add("player--active");
      player1.classList.remove("player--active");

      j = 0;
    }
    if (!player0.classList.contains("player--active")) {
      currentResult0 += currentScore;
      score0EL.textContent = currentResult0;
      current0EL.textContent = 0;
    } else {
      currentResult1 += currentScore;
      score1EL.textContent = currentResult1;
      current1EL.textContent = 0;
    }

    currentScore = 0;
  }
  if (Number(score0EL.textContent >= 100)) {
    player0.classList.remove("player--active");
    player0.classList.add("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
  } else if (Number(score1EL.textContent >= 100)) {
    player1.classList.remove("player--active");
    player1.classList.add("player--winner");
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  }
});

btnnew.addEventListener("click", function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add("hidden");
  player0.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  currentScore = 0;
  currentResult0 = 0;
  currentResult1 = 0;
  firstScore0 = 0;
  firstScore1 = 0;
  i = 0;
  j = 0;
});
