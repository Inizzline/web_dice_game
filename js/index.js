
//Randomizing dye for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDyeImageSource1 = "images/dye" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDyeImageSource1);


//Randomizing dye for player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDyeImageSource2 = "images/dye" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDyeImageSource2);


//Conditionals for both players

if(randomDyeImageSource1 > randomDyeImageSource2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!"
}else if (randomDyeImageSource2 > randomDyeImageSource1) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩"
} else {
  document.querySelector("h1").innerHTML = "😮‍💨 Draw!!!"
}
