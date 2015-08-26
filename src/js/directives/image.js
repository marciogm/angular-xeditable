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
        var divCropArea    = angular.element('<div class="cropArea"><img-crop id="fileCropArea" image="myImage" result-image="$data"></img-crop></div>');
        var divCroppedARea = angular.element('<div>Cropped Image:</div><div><img ng-src="{{$data}}" /></div>');

        divCropArea.find("#fileCropArea").attr('change-on-fly',         this.attrs.eChangeOnFly);
        divCropArea.find("#fileCropArea").attr('area-type',             this.attrs.eAreaType);
        divCropArea.find("#fileCropArea").attr('area-min-size',         this.attrs.eAreaMinSize);
        divCropArea.find("#fileCropArea").attr('result-image-size',     this.attrs.eResultImageSize);
        divCropArea.find("#fileCropArea").attr('result-image-format',   this.attrs.eResultImageFormat);
        divCropArea.find("#fileCropArea").attr('result-image-quality',  this.attrs.eResultImageQuality);
        divCropArea.find("#fileCropArea").attr('on-change',             this.attrs.eOnChange);
        divCropArea.find("#fileCropArea").attr('on-load-begin',         this.attrs.eOnLoadBegin);
        divCropArea.find("#fileCropArea").attr('on-load-done',          this.attrs.eOnLoadDone);
        divCropArea.find("#fileCropArea").attr('on-load-error',         this.attrs.eOnLoadError);

        divInputFile.find("#fileInput").on('change', this.scope.handleFileSelect);

        this.inputEl.append(divInputFile);
        this.inputEl.append(divCropArea);
        this.inputEl.append(divCroppedARea);
      }
    });
}]);
