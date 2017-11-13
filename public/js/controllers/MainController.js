
angular.module('videoFeed').controller('MainCtrl', function ($scope, $feed) {
    init();

    function init() {
        
        $feed.get().then(function (response) {
            //all videos available
            $scope.videos = response.data;
            //all sources exists
            var viewed = [];
            $scope.sources = [{name: "ALL", value: ""}];
            response.data.map(function(curr, index, array){
                if (!viewed.includes(curr.source)){
                    viewed.push(curr.source);
                    $scope.sources.push({name: curr.source.toUpperCase(), value: curr.source});
                }
            });
        });
    }

    $scope.filterVideos = function(filter){
        $feed.get(filter).then(function (response) {
            $scope.videos = response.data;
            //console.log($scope.videos);
        });
    }

});