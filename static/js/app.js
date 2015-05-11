(function() {
  var app = angular.module("weatherpicsApp", ["ui.bootstrap", "modalControllers"]);
  
  app.controller("WeatherpicsController", function($modal) {
    this.pics = pics;
    var weatherpicsController = this;
    this.navbarCollapsed = true;
    
    this.showInsertPicDialog = function(selectedPic) {
      this.navbarCollapsed = true;
      
      var modalInstance = $modal.open({
        templateUrl: "/static/partials/insert_pic_modal.html",
        controller: "InsertModalController",
        controllerAs: "insertModalCtrl",
        resolve: {
          picInModal: function () {
            return selectedPic;
          }
        }
      });

      modalInstance.result.then(function (weatherpicFromModal) {
        if (selectedPic == undefined) {
          weatherpicsController.pics.unshift(weatherpicFromModal);
        } else {
          var indexOfSelectedPic = weatherpicsController.pics.indexOf(selectedPic);
          if (indexOfSelectedPic > -1) {
            weatherpicsController.pics.splice(indexOfSelectedPic, 1);
          }
          weatherpicsController.pics.unshift(weatherpicFromModal);
        }
      });
    };
  });
 
  var pics = [
              {image_url: "http://severe-wx.pbworks.com/f/tornado.jpg", caption:"Wow!"},
              {image_url: "http://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Carmel_forest_fire14.jpg", caption:"Big fire"},
              {image_url: "http://www.duskyswondersite.com/wp-content/uploads/2011/02/weather-cloud-32.jpg", caption:"Clouds"},
              ];
  
  
})();