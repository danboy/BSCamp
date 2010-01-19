var CalendarImg = function(canvas,eventDate,options){
  this.svg = Raphael(canvas,100,100);
  this.options = Object.extend({
      calFont: this.svg.getFont("SketchRockwell")
    }, options);
  var self = this;
  this.pathData = [];
  
  //create a grid svg on the canvas div.
  calFont=this.options.calFont;
  this.cal = this.svg.rect(0, 0, 100, 100, 4).attr({fill:"#fff6d5"});
  this.month = this.svg.print(5, 15, "January",calFont,22).attr({fill:"#333","text-anchor": "center"});
  this.svg.rect(10,30,80,8).attr({fill:"#d4aa00",stroke:"#d4aa00"});
  this.day = this.svg.print(18, 70, "18",calFont,65).attr({fill:"#333"});
}
document.observe('dom:loaded',function(){
  cal = new CalendarImg('calendar');
});
