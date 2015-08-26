var app = angular.module("app", ["xeditable", "ngImgCrop"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope) {
  $scope.user = {
    name: 'awesome user'
  };

  $scope.myImage='';
  $scope.myCroppedImage='';
  $scope.handleFileSelect = function(evt) {
    var file = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function($scope){
        $scope.myImage = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  };
});
