// console.dir(document);

//Change the h1 Header ""

var headerTitle = document.querySelector("#header-title");
headerTitle.textContent = "The Best Store In The World!";

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
 const changeTitle = function () {
  document.getElementsByTagName("TITLE");
  document.title = "A New Title"
  };
console.log(changeTitle());

// EXERCISE 3.:
//Write a function to change the page background color
//WORKS !!!
function setBackground() {
  document.getElementsByTagName("body");
  document.body.style.background= "#A0E7E5";
}
console.log(setBackground());

// Change the address in the footer :
//WORKS !!!
function footAddress() {
  var addressFooter = document.querySelector("#address");
  addressFooter.textContent = "Hamdije Kresevljakovica 13";

  // addressFooter.document.style.background = "#A0E7E5"  
}
console.log(footAddress());

/* EXERCISE 3a
      Write a function to add a class to the page's h1 title
      n "red-color" (execute the function when title is 
      hovered by mouse).
  */
 const addClassToTitle = function () {
  document.getElementById("header-title").addEventListener("mouseover", function () {
    this.style.color = "red";
  })
  
  //  document.getElementById("header-title").onmouseover = function () {
  //    this.style.color = "red";
  //  }

  //  var element = document.getElementById("header-title")
  //  element.classList.add("mystyle");
  //  element.addEventListener("mouseover", function () {
  //   element.style.color = 'red';  
  //  })
   
 };
 console.log(addClassToTitle());

 /* EXERCISE 3b
      Write a function to remove "red-color" class from 
      previous h1 (execute the function when the mouse
       leaves the title).
  */
 const removeClassFromTitle = function () {
   document.getElementById("header-title").addEventListener("mouseout", function () {
     this.style.color = "black";
   })
 };

console.log(removeClassFromTitle());

/* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>

          Write a function to change the text of only the p
           which are child of a div (execute the function 
            by assigning it to a button's click event)
  */
  const changePContent = function () {
    // var firstList = document.getElementById("firstList").onclick = function changePContent() {
    //   var textChange = firstList.childNodes[0];
    //   textChange.nodeValue = "Text Changed!";
    // }
    var firstList = document.getElementById("firstList").addEventListener("click", function () {
      var textChange = firstList.childNodes[0];
    textChange.nodeValue = 'Text Changed!';
    });

  };

  console.log(changePContent());