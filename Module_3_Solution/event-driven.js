function dochange(){
    alert('clicked button with JS function.');
}

function showMsg(){
    var choice;
   
  var r = confirm("Press a button!");
  if (r == true) {
   choice = "You pressed OK!";
  } 
    else {
    choice = "Are you sure you want to cancel?";
  }
}

function changeColor(){
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");
    //The JavaScript method getElementById is used to access an HTML element using its associated ID. You may remember that a method performs an operation on an object and is proceeded by a dot. In this case, the method getElementById uses the HTML document to access its element. The label document refers to the entire HTML web page. The getElementById method has one parameter. Here, it's d1, the ID label associated with a particular HTML element.
    //The getElementById method returns this HTML element with the ID label that was passed as a parameter. That's the div element with the word Hello because the associated ID label is d1.
    //We need to create a variable to store this returned HTML element. Here, that's shown by var dd1. Now that variable can be used to access the element and change its color. The next line creates a similar variable called dd2. This stores the HTML element returned by document.getElementById when it's passed the parameter d2.

    dd1.className = "blueback";
    dd2.className = "yellowback";
    //We'll do this by setting the CSS class for the div. The line of code dd1.className gets blueback is what changes the color of the div with the ID d1.Remember, this div was stored in the variable dd1.
    //The attribute className is one of the characteristics of an HTML element that can be accessed in JavaScript.
    //The code assigns the className blueback as the class of the div stored in variable dd1.
    //The next line similarly assigns the class yellowback to the variable dd2, which is storing the HTML element with ID d2.
}

function changeText(){
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");

    dd1.innerHTML = "Bonjour";
    dd2.innerHTML = "Sayonara";
    //The attribute shown here .innerHTML accesses the HTML content within the element, in this case, that's everything inside the div, which is text. This line of code dd1.innerHTML gets Bonjour changes the text of the HTML element accessed by the variable dd1.
}