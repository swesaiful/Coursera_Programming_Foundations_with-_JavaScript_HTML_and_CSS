function doLime(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor= "lime";
}

function doColor(){
    var dd1 = document.getElementById("d1");
    var colorInput = document.getElementById("clr");
    //The color picker element is stored in the colorInput variable, using the same technique to find the element in the document. As before, you can choose any name you want for your variable names, but the IDs given in the strings must match those IDs given in the HTML elements.

    var color = colorInput.value;
    //The value of the color chooser is accessed using the .value attribute, or field of the color chooser, HTML element stored in the variable color input.

    dd1.style.backgroundColor = color;
    //We use the .style attribute to set the background color of the canvas to whatever color the color picker is currently set to.
}

function doSquare(){
    var dd1 = document.getElementById("d1");
    //As before, we store our reference to the canvas in a variable.

    var sizeInput = document.getElementById("sldr");
    //Then, we use the ID for the slider element to create a variable sizeInput representing the slider.

    var size = sizeInput.value;
    //We get the value of the slider element and store it in the variable size.

    var context = dd1.getContext("2d");
    //As you have seen before, we need to get the context of the canvas in order to draw in it.

    context.clearRect(0,0,dd1.width,dd1.height);
    //.clearRect will clear a rectangle, given four parameters. Two for the top left coordinate of the rectangle and then its width and height. For simplicity here, we will clear the entire canvas each time dosquare is called.

    context.fillStyle = "yellow";
    context.fillRect(10,10,size,size);
    //Finally, we use the size input from the slider to draw a yellow rectangle starting at the coordinates 10, 10, whose side lengths are determined by the size variable. 

    //Let's see what this code does. Hm, the square can be made larger with a slider but it doesn't seem to get smaller. This is because each time the oninput event handler calls the dosquare function, it draws another square, one on top of the other. But the old ones are not cleared.
}