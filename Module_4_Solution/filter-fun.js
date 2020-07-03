// Declare global variables

var image=null;
var rainbowImg=null;
var grayImg=null;
var blurImg=null;
var redImg=null;
var trigSharkImg=null;
var windowImg=null;
var canvas = document.getElementById("can");

// Display image

function uploadImage(){
  var fileInput= document.getElementById("imgFile");
  image = new SimpleImage(fileInput);
  rainbowImg = new SimpleImage(fileInput);
  grayImg = new SimpleImage(fileInput);
  blurImg = new SimpleImage(fileInput);
  redImg = new SimpleImage(fileInput);
  trigSharkImg = new SimpleImage(fileInput);
  windowImg = new SimpleImage(fileInput);
  
  image.drawTo(canvas);
}


// Check that image is uploaded or not

function checkImage(img){
  if (img == null || !img.complete()) {
    alert("Image is not loaded!");
    return false;
  } else {
    return true;
  }
}


// Make image Rainbow in the Canvas

//Filter Rainbow
function filterRainbow(){
  var height = rainbowImg.getHeight();
  for (var pixel of rainbowImg.values()) {
    var y = pixel.getY();
    var avgPixel = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {

      // Red Color
      if (avgPixel < 128) {
        pixel.setRed(2 * avgPixel);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avgPixel - 255);
        pixel.setBlue(2 * avgPixel - 255);
      }
    } else if (y < height * 2 / 7) {

      // Orange color
      if (avgPixel < 128) {
        pixel.setRed(2 * avgPixel);
        pixel.setGreen(0.8 * avgPixel);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2 * avgPixel - 51);
        pixel.setBlue(2 * avgPixel - 255);
      }
    } else if (y < height * 3 / 7) {

      // Yellow color
      if (avgPixel < 128) {
        pixel.setRed(2 * avgPixel);
        pixel.setGreen(2 * avgPixel);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avgPixel - 255);
      }
    } else if (y < height * 4 / 7) {

      // Green color
      if (avgPixel < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avgPixel);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2 * avgPixel - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avgPixel - 255);
      }
    } else if (y < height * 5 / 7) {

      //Blue color
      if (avgPixel < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avgPixel);
      } else {
        pixel.setRed(2 * avgPixel - 255);
        pixel.setGreen(2 * avgPixel - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {

      // Indigo Color
      if (avgPixel < 128) {
        pixel.setRed(0.8 * avgPixel);
        pixel.setGreen(0);
        pixel.setBlue(2 * avgPixel);
      } else {
        pixel.setRed(1.2 * avgPixel - 51);
        pixel.setGreen(2 * avgPixel - 255);
        pixel.setBlue(255);
      }
    } else {

      // Violet Color
      if (avgPixel < 128) {
        pixel.setRed(1.6 * avgPixel);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avgPixel);
      } else {
        pixel.setRed(0.4 * avgPixel + 153);
        pixel.setGreen(2 * avgPixel - 255);
        pixel.setBlue(0.4 * avgPixel + 153);
      }
    }
  }
}
// Rainbow image
function rainbowImage() {
  if (checkImage(rainbowImg)) {
    filterRainbow();
    rainbowImg.drawTo(canvas);
  }
}

// Make image Gray in the Canvas

// Filter Gray
function filterGray(){
  for (var pixel of grayImg.values()){      
    var avgPix =(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avgPix);
    pixel.setGreen(avgPix);
    pixel.setBlue(avgPix);
  }
}
// Gray Image
function grayImage(){
  if (checkImage(grayImg)) {
    filterGray();
    grayImg.drawTo(canvas);
  }
}

// Make image Blur in the Canvas

// Make blur
function blurImage(){
  if (checkImage(blurImg)) {
    filterBlur();
    blurImg.drawTo(canvas);
  }
}

function ensureInImg(coordinate, size) {
  if (coordinate < 0) {
    return 0;
  }
  if (coordinate >= size) {
    return size - 1;
  }
  return coordinate;
}

function getNearPixel(img, x, y, diameter) {
  var dx = Math.random() * diameter - diameter / 2;
  var dy = Math.random() * diameter - diameter / 2;
  var nx = ensureInImg(x + dx, img.getWidth());
  var ny = ensureInImg(y + dy, img.getHeight());
  return img.getPixel(nx, ny);
}
// Filter blur
function filterBlur() {
  for (var pixel of blurImg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.6) {
      var nearPixel = getNearPixel(blurImg, x, y, 10);
      blurImg.setPixel(x, y, nearPixel);
    } else {
      blurImg.setPixel(x, y, pixel);
    }
  }
}

// Make image Red in the Canvas

// Make Red
function redImage(){
  if (checkImage(redImg)) {
    filterRed();
    redImg.drawTo(canvas);
  }
}
//Filter Red
function filterRed(){
    for(var pixel of redImg.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
        }
        else {
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
        } 
    }
}

// Make Window Image in the canvas

function windowImage(){
  if (checkImage(windowImg)) {
    filterWindow();
    windowImg.drawTo(canvas);
  }
}
function setBlack(pixel)  {
  pixel.setRed(0);
  pixel.setGreen(0);
  pixel.setBlue(0);
}

function filterWindow(){
  var border = 60;
  var width = ((windowImg.getWidth()-2*border)/4);
  var height = ((windowImg.getHeight()-2*border)/3);
  var div = (40);

 
  // add border
  for (var pixel of windowImg.values()) {
  var x = pixel.getX();
  var y = pixel.getY();
  if (x < border || (x > windowImg.getWidth() - border)) {
            setBlack(pixel);
        }
  if (y < border || (y > windowImg.getHeight() - border)) {
            setBlack(pixel);
        }
    if ((x > (border+width-div/2-div/4)) && (x < (border+width+div/2-div/4))) {
        setBlack(pixel);
    } 
  if ((x > (border+2*width-div/2)) && (x < (border+2*width+div/2))) {
        setBlack(pixel);
    }
  if ((x > (border+(3*width -div/2 + div/4))) && (x < (border+(3*width)+(div/2)+div/4))) {
        setBlack(pixel);
    }
  if ((y > (border+height-div/2-div/6)) && (y < (border+height+div/2-div/6))) {
        setBlack(pixel);
    } 
  if ((y > (border+2*height-div/2+div/6)) && (y < (border+2*height+div/2+div/6))) {
        setBlack(pixel);
    }
 }
}


// Make TrigShark in the canvas

function sharkTeeth(pix){
  
  var r=pix.getRed();
  var g=pix.getGreen();
  var b=pix.getBlue();
  var average=(r+g+b)/3;
  var dark=4;
  pix.setRed(average/dark);
  pix.setGreen(average/dark);
  pix.setBlue(average/dark);
  
}
function sharkMouth(pix){
  
  var r=pix.getRed();
  var g=pix.getGreen();
  var b=pix.getBlue();
  var avg=(r+g+b)/3;
  if(avg>128){
      var amount=1.5;
    pix.setRed((2*avg-255)/amount);
    pix.setGreen((2*avg-255)/amount);
    pix.setBlue(255);
  }
  else{
    pix.setRed(0);
    pix.setGreen(0);
    pix.setBlue(2*avg);
  }
  
}
// Filter TrigShark
function filterTrigShark(){
  for(var pix of trigSharkImg.values()){
    var x=pix.getX();
    var y=pix.getY();
    var no=4;
    var val=x*((no*2*Math.PI)/trigSharkImg.getWidth());
    var bound=(trigSharkImg.getHeight()/8)*Math.sin(val)+trigSharkImg.getHeight()/6;
    var Lbound=(trigSharkImg.getHeight()/8)*Math.sin(Math.PI+val)+trigSharkImg.getHeight()/6;
    if(y<bound)
      {
       sharkTeeth(pix);
      }
    else if(y>(trigSharkImg.getHeight()-Lbound))
      {
        sharkTeeth(pix);
      }
    else
    {
        sharkMouth(pix);
    }
  }
}
// Make TrigShark
function trigSharkImage(){
  if (checkImage(trigSharkImg)) {
    filterTrigShark();
    trigSharkImg.drawTo(canvas);
  }
}

// Reset image to the original form

function resetImage(){
 uploadImage();
}


// Clear the Canvas
var context;
function clearImage(){
    var dd1 = document.getElementById("can");
    context = dd1.getContext("2d");
    context.clearRect(0,0,dd1.width,dd1.height);  
}

