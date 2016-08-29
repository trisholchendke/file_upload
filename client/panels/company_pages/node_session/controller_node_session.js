(function () {	'use strict';

angular
.module('routerApp')
.controller('controller_node_session', ['$scope','$http',controller_node_session])
;
function controller_node_session($scope,$http){
	$scope.submit = function(){
		var email,pass;
		
		$http.post('/login',{email:$scope.email,pass:$scope.pass})
		.success(function(data){
//			alert(JSON.stringify(data));
			$scope.abc = data;
			 if(data==='done')           
	            {
//	                window.location.href="/admin";
	            }
		});
	}
	$scope.submit();
}

})();
