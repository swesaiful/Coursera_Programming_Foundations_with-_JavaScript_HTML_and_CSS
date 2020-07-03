var img = new SimpleImage("smallpanda.png");
print(img);

var thickness = 0.04;

//make pixel's color is black
function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

//add a black border to image
function addBorder(img, thickness){
    //get image dimensions
    var iw = img.getWidth();
    var ih = img.getHeight();
    
    for(var pixel of img.values()){
        //get pixel coordinates
        var x = pixel.getX();
        var y = pixel.getY();

        //Check pixel for being in the border area
        if(x < iw*thickness || x > iw * (1 - thickness) || y < ih*thickness || y > ih* (1 - thickness)) {
            //call setBlack function
            setBlack(pixel);
        }
    }
}

addBorder(img, thickness);
print(img);
