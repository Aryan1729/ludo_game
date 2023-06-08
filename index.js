var randomnum1 = Math.floor(Math.random()*6)+1;
var randomdiceimage = "dice"+randomnum1+".png";
var randomimagesource = "images/"+randomdiceimage;
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",randomimagesource);
// images1.setAttribute("src",randomimagesource);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomdiceimage2 = "dice"+randomnum2+".png";
var randomimagesource2= "images/"+randomdiceimage2;
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src",randomimagesource2);
if(randomnum1>randomnum2){
    // alert("palyer 1 win");
    document.querySelector("h1").innerHTML="player 1 win";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="player 2 win";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
