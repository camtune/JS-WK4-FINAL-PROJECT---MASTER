
/* It simply asks the user to confirm that they want to Load the webpage and the ternary statement checks 
if they said no and if they did it closes that tab. */
let close = confirm("Do You Want To load The Webpage?") == false ? window.top.close(): "Do nothing";

  /* Event listener for onload method passing a function. */
  window.addEventListener("load", function pageLoaded() { 
    this.alert("Your Page Has Loaded");
    document.getElementById("tabhoverTitle").innerHTML = "Tab and/or Hover Over Thumbnails!";  
    document.getElementById("tabhoverTitle").style.fontSize = "30px";  
  });

/* Reload page function attached to button event in HTML */
function reloadPage() {
  location.reload();
 }

/* Using a for loop to interate through <img> tags to 
add event listener to onfocus() method. */
let photos = document.getElementsByTagName("img");
for(let i = 0; i < photos.length; i++) {
  var marquee = photos[i];
  marquee.addEventListener("focus", function(){
    upDate(this);
  })

  /* Using if else statements to assign event listeners to onblur() method for <img> tags */
  marquee.addEventListener("blur", function(){

     /*Nested switch statement to pass different functions to onblur() method  */
     switch(i) {
      case 0:
        onBlur1();
        break;
      case 1:
        onBlur2();
        break;
      case 2:
        onBlur3();
        break;
      case 3:
        onBlur4();
        break;
      case 4:
        onBlur1();
        break;
      case 5:
        onBlur2();
        break;
     }        
  })
} 

/* Updates id image_container using onmouseover event */
 function upDate(previewPic) {
     document.getElementById("image_container").style.backgroundImage = "url(" + previewPic.src + ")";
     document.getElementById("image_container").style.backgroundSize = "100% 100%";
     document.getElementById("image_container").style.color = "white";
     document.getElementById("image_container").style.fontSize = "40px";
     document.getElementById("image_container").style.fontWeight = "900";
     document.getElementById("image_container").style.borderRadius = "10%";
     document.getElementById("image_container").innerHTML = previewPic.alt;
     console.log("upDate() Function Fires!")   
}
      
/* Undo updates using onmouseout event requesting to "Hover Over Pic"*/
function unDo() {
   document.getElementById("image_container").style.backgroundImage = "url('')";
   document.getElementById("image_container").innerHTML = "Hover Over Pic!"; 
   document.getElementById("image_container").style.color = "red";         
   document.getElementById("image_container").style.fontSize = "30px";         
}

/* Updates2 id image_container using onfocus event */
function upDate2(previewPic) {
  document.getElementById("image_container").style.backgroundImage = "url('images2/img5.jpg')";
  document.getElementById("image_container").style.backgroundSize = "100% 100%";
  document.getElementById("image_container").innerHTML = "";     
}

/* reload page function using button in HTML */
function upDate3() {
  location.reload();
}

 /* 4 Functions triggered when element loses focus.Changing text and border color. */
 function onBlur1() {
    document.getElementById("tabAgain").innerHTML = "Tab Again!";  
    document.getElementById("tabAgain").style.border = "4px solid red"    
  }

  function onBlur2() {
    document.getElementById("tabAgain").innerHTML = "Tab Again!";  
    document.getElementById("tabAgain").style.border = "4px solid blue"   
  }

  function onBlur3() {
    document.getElementById("tabAgain").innerHTML = "Tab Again!";  
    document.getElementById("tabAgain").style.border = "4px solid grey"   
  }

  function onBlur4() {
    document.getElementById("tabAgain").innerHTML = "Tab Again!";  
    document.getElementById("tabAgain").style.border = "4px solid yellow"   
  }

    



  

  
 
  

  
   
