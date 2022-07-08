const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const diceImages1 = "images/dice" + randomNumber1 + ".png";
const diceImages2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".dice .img1").setAttribute("src", diceImages1) ;
document.querySelector(".dice .img2").setAttribute("src", diceImages2) ;




  if (randomNumber1 > randomNumber2){
    document.querySelector(".header").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber1 === randomNumber2) {
  document.querySelector(".header").innerHTML = "Draw!";
} else {
  document.querySelector(".header").innerHTML = "Player 2 Wins!🚩";
}
