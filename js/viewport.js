import com.greensock.layout.*;
 
//create a 300x100 rectangular area at x:50, y:70 that stretches when the stage resizes (as though its top left and bottom right corners are pinned to their corresponding PinPoints on the stage)
var area:AutoFitArea = new AutoFitArea(this, 50, 70, 300, 100);
 
//attach a "myImage" Sprite to the area and set its ScaleMode to PROPORTIONAL_OUTSIDE and crop the overspill
area.attach(myImage, {scaleMode:ScaleMode.PROPORTIONAL_OUTSIDE, crop:true});
 
//if you'd like to preview the area visually, set preview to true (by default previewColor is red)
area.preview = true;
  
//attach a CHANGE event listener to the area
area.addEventListener(Event.CHANGE, onAreaUpdate);
function onAreaUpdate(event:Event):void {
    trace("updated AutoFitArea");
}
 
//to create an AutoFitArea exactly around a "myImage" DisplayObject so that it conforms its initial dimensions around the DisplayObject, use the static createAround() method:
var area:AutoFitArea = AutoFitArea.createAround(myImage);