/*
ngImgCrop
https://github.com/alexk111/ngImgCrop
*/
angular.module('xeditable').directive('editableImage', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableImage',
      inputTpl: '<div></div>',
      render: function() {
        this.parent.render.call(this);

        var divInputFile   = angular.element('<div>Select an image file: <input type="file" id="fileInput" /></div>');
        var divCropArea    = angular.element('<div class="cropArea"><img-crop image="myImage" result-image="$data"></img-crop></div>');
        var divCroppedARea = angular.element('<div>Cropped Image:</div><div><img ng-src="{{$data}}" /></div>');

        divInputFile.find("#fileInput").on('change', this.scope.handleFileSelect);

        this.inputEl.append(divInputFile);
        this.inputEl.append(divCropArea);
        this.inputEl.append(divCroppedARea);
      }
    });
}]);
