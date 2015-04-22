(function() {
  var app = angular.module("weatherpicsApp", []);
  
  app.controller("WeatherpicsController", function() {
    this.pics = pics;
  });
  
  var pics = [
              {image_url: "http://severe-wx.pbworks.com/f/tornado.jpg", caption:"Wow!"},
              {image_url: "http://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Carmel_forest_fire14.jpg", caption:"Big fire"},
              {image_url: "http://www.duskyswondersite.com/wp-content/uploads/2011/02/weather-cloud-32.jpg", caption:"Clouds"},
              ];
  
  
})();