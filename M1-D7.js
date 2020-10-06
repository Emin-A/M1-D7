console.dir(document);

// bkgrnd = (color) => {
//   document.querySelector("body").style.backgroundColor = color;
// };

// Change the background color:
// In this case I didnt change the background color of the table
//just the body!

var backGround = document.querySelector("#bkgrnd");
backGround.style.backgroundColor = "#1abc9c";

//Change the h1 Header ""

var headerTitle = document.querySelector("#header-title");
headerTitle.textContent = "The Best Store In The World!";

//Change the address in the footer :
var addressFooter = document.querySelector("#address");
addressFooter.textContent = "Hamdije Kresevljakovica 13";

// /*EXERCISE 1
// Create a new welcome alert message when the page
// successfully loads
// */
window.onload = function () {
  alert("Welcome to our shop!");
};

window.onload();

/* EXERCISE 2
      Write a function to change the Title of the page in 
      something else (execute the function in browser 
        console)
  */

const changeTitle = function (newTitle) {
  document.querySelector("header-title").innerText = newTitle;
  newTitle = "Simply The Best!";
};
