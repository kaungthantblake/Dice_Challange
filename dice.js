var number1 = Math.floor(Math.random() * 6)+1;//it will givr 1-6

var randomDiceimage = "dice" + number1 +".png";//dice1.png to dice6.png

var randomimagesourese = "./images/" + randomDiceimage;//./images/dice1.png to dice 6.png radom

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesourese);

// var number2 = Math.floor(Math.random() * 6)+ 1;

// var randomimagesourse2 =  "./image/dice" + number2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src",randomimagesourse2);

var number2 = Math.floor(Math.random() * 6)+1;//it will givr 1-6

var randomDiceimage2= "dice" + number2 +".png";//dice1.png to dice6.png

var randomimagesourese2 = "./images/" + randomDiceimage2;//./images/dice1.png to dice 6.png radom

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesourese2);

if ( number1 > number2){
    document.querySelector('h1').innerHTML = "player1 wins ";
}
else if ( number1 < number2){
    document.querySelector('h1').innerHTML = "player2 wins ";
}
else {
    document.querySelector('h1').innerHTML = "draw";
}