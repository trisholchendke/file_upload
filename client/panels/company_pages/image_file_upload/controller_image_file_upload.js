
(function () {	'use strict';

angular
.module('routerApp')
.controller('controller_image_file_upload',['$scope','Upload','$window','$http',controller_image_file_upload]);
function controller_image_file_upload($scope,Upload,$window,$http){
	var get_uploaded_logos_from_collection_uploaded_logos = function() {
		$http({
			  method: 'GET',
			  url: '/get_uploaded_logos_from_collection_uploaded_logos',
			}).then(function successCallback(response) {
//				alert(JSON.stringify(response.data));
				 $scope.uploaded_logos = response.data;
			    // this callback will be called asynchronously
			    // when the response is available
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	};
	get_uploaded_logos_from_collection_uploaded_logos();
	
	var vm = this;
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }
    
    vm.upload = function (file) {
//    	alert(JSON.stringify(file));
        Upload.upload({
            url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) {
        	get_uploaded_logos_from_collection_uploaded_logos();
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
//        	alert(JSON.stringify(resp.status));
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
}

})();