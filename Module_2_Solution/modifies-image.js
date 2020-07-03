var img= new SimpleImage("hilton.jpg");
print(img);

var w = img.getWidth();

for(var pixel of img.values()){
    
//If the pixel’s x-coordinate is less than one-third of the image’s width, set the pixel’s red value to 255.
    //x = pixel.getX(); <-- We can write this way too
    
    if(pixel.getX() < w*(1/3)){
        pixel.setRed(255);
    }
    //If the pixel’s x-coordinate is between one-third and two-thirds of the image’s width, set the pixel’s green value to 255.
    
    else if((pixel.getX() >= w*(1/3)) && (pixel.getX() <= w*(2/3))){
        pixel.setGreen(255);
    }
    //If the pixel’s x-coordinate is more than two-thirds of the image’s width, set the pixel’s blue value to 255.
    
    else {
        pixel.setBlue(255);
    }
}

print(img);
