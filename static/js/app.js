(function() {
  var app = angular.module("weatherpicsApp", ["ui.bootstrap"]);
  
  app.controller("WeatherpicsController", function($modal) {
    
    
    this.pics = pics;
    var weatherpicsController = this;
    this.navbarCollapsed = true;
    
    this.showInsertPicDialog = function() {
      
      var modalInstance = $modal.open({
        templateUrl: "/static/partials/insert_pic_modal.html",
        controller: "InsertModalController",
        controllerAs: "insertModalCtrl",
      });

      modalInstance.result.then(function (weatherpicFromModal) {
        weatherpicsController.pics.push(weatherpicFromModal);
      });
    };
  });

  app.controller("InsertModalController", function($modalInstance, $timeout) {
    this.imageUrl = "";
    this.caption = "";
    
    this.insertPic = function () {
      var weatherpicFromModal = {image_url: this.imageUrl, caption: this.caption};
      $modalInstance.close(weatherpicFromModal);
    };

    // Add comment
    $modalInstance.opened.then(function() {
      $timeout(function() {
        document.querySelector("#image-url-input").focus();
      }, 100);
    });
    
    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
  
  
  var pics = [
              {image_url: "http://severe-wx.pbworks.com/f/tornado.jpg", caption:"Wow!"},
              {image_url: "http://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Carmel_forest_fire14.jpg", caption:"Big fire"},
              {image_url: "http://www.duskyswondersite.com/wp-content/uploads/2011/02/weather-cloud-32.jpg", caption:"Clouds"},
              ];
  
  
})();