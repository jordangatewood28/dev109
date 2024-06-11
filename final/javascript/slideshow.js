var myImages =["images/hulldown.jpg", "images/turretdown.jpg", "images/smokescreen.jpg"];


var captionImages =["HULL DOWN: This is a standard tactic for tanks to attempt to only expose the turret to represent the smallest target possible while being able to engage targets.","TURRET DOWN: This is done to allow the crew to observe the battlefield without exposing the tank at to maintain stealth.","SMOKE SCREEN: "];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}

setInterval(autoSlide,2000); // Next

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
