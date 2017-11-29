
angular.module('prodManagement').factory('$products', ['$http', 'localStorageService', '$q', function ($http, localStorageService, $q) {

    return {
        get: function (id = "") {
        	var deffered = $q.defer(),
				items = localStorageService.get('items');

        	if (items) {
        		deffered.resolve(items);
        	}
        	else {
        		 $http.get('/api/products/' + id).then(function(data) {
        		 	deffered.resolve(data.data);
        		 });
         	}

         	return deffered.promise;
        },
        set: function(items) {
        	localStorageService.set('items', items);
        }
    }

}]);