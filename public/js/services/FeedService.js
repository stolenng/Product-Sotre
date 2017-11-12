
angular.module('videoFeed').factory('$feed', ['$http', function ($http) {

    return {
        get: function (source = "") {
            return $http.get('/api/feed/' + source);
        }
    }

}]);