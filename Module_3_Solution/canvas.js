function doLime(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor= "lime";
}

function doYellow(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor= "white";

    //See how to make yellow rectangles appear by using the canvas. The first step is going to be that rather than drawing in the canvas, we're going to have to access the context of the canvas. That's a new concept for canvases, that the graphics are actually displayed in the canvas's context. The way we do that is create another variable, I'll call it ctx for context and I'll get the context from the canvas which is stored in variable dd1. And the name of my method is getContext.

    var context = dd1.getContext("2d");
    //ask you to do are the 2D graphics.

    context.fillStyle = "yellow";
    //That means anything I draw will be in yellow.

    context.fillRect(10,10,40,40);
    //Then I'm going to fill a rectangle (x,y,w,h). That's the name of the method there is fillRect. And I have to specify where it's going to be.

    context.fillRect(60,10,40,40);
    //And then I'm going to draw another rectangle. This rectangle is going to be near to the other one, almost adjacent to it. I'm going to make it at 60, 10, and also make it 40, 40.

    //Draw text in the Canvas

    context.fillStyle = "black";
    //I'm going to make the text in a different color so, I'm going to set the fillStyle to black.

    context.font = "30px Arial";

    context.fillText("Hello",10,80);
    //I specify the text I want to draw, which in this case is hello. And I specify where to draw it, which is 10, 80. Let's see how that works.

}