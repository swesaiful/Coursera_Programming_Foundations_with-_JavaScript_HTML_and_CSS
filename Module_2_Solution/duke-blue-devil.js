var img = new SimpleImage("duke_blue_devil.png");
print(img);

for(var pixel of img.values()){
    
     if (pixel.getGreen() == 51)   // if the pixel is Duke-blue
    {
        pixel.setRed(255);        // make it yellow
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    else
    {                       
        pixel.setRed(255);          // make it white
        pixel.setGreen(255);
        pixel.setBlue(255);
    }
    
}
print(img);
