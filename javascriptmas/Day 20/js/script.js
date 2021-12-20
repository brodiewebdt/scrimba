
 const inputs = document.querySelectorAll(".controls input");
 const root = document.querySelector(':root');

 const eyeColor = document.getElementById('color');
 const noseColor = document.getElementById('color3');
 const buttonColor = document.getElementById('color2');
 const eye = document.querySelector('.eye');
 const nose = document.querySelector('.nose');
 const button = document.querySelector('.button');
 const hat = document.querySelector('.hat');
 const topHat = document.getElementById('top-hat');

 // Task:
 // Write a function to update the snowman colors according to the colors selected from the pickers.
 
 // Stretch goals:
 // - Add other items eg scarf, arms, etc.
 // - Add different options for nose shape, or hats.
 // - Check for contrast between pupils and eye color.

 
 function getColor() {
     
     noseColor.addEventListener('change', function() {
        root.style.setProperty('--color3', noseColor.value);    
     })
    
     eyeColor.addEventListener('change', function() {
        root.style.setProperty('--color', eyeColor.value);     
     })
    
     buttonColor.addEventListener('change', function() {
        root.style.setProperty('--color2', buttonColor.value); 
     })
}


getColor()

topHat.addEventListener('click', function() {
    // hat.style.display = 'block';
    if (hat.style.display === "none") {
        hat.style.display = "block";
      } else {
        hat.style.display = "none";
      }
});