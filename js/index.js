// Your code goes here
const navButtons = document.querySelectorAll("nav > a")
console.log(navButtons);
const homeButton = navButtons[0];
const aboutButton = navButtons[1];
const blogButton = navButtons[2];
const contactButton = navButtons[3];

homeButton.addEventListener('click', function(){ 
    alert("You're already home!"); 
});

const imgs = document.querySelectorAll('img');
console.log(imgs)
const busImg = imgs[0];
const mapImg = imgs[1];
const cityImg = imgs[2];
const beachImg = imgs[3];

// busImg.addEventListener('click', function(){
//     busImg.style.vh="0";
// });

const destinationsButtons = document.querySelectorAll("div.btn");
const funButton = destinationsButtons[0];
const mountainButton = destinationsButtons[1];
const islandButton = destinationsButtons[2];
console.log(destinationsButtons);

funButton.addEventListener('mouseover', function(event){
    event.target.style.color = "red";
    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);

// mountainButton.addEventListener('keydown', function(event){
//     event.target.style.width = "0";
//     setTimeout(function() {
//         event.target.style.width = "";
//     }, 500);
// }, false); 

// mountainButton.addEventListener('dblclick', function (event) {
//     event.mountainButton.classList.toggle('text-content');
//   });
//   console.log(mountainButton);