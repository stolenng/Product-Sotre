
angular.module('videoFeed').directive('html5vid', function ($window, YoutubeApiService) {
    return {
        restrict: "E",
        scope: {
            url: "@"
        },
        template: "<video class='urlPlayer' controls><source src='{{url}}' type='video/mp4'></video>",
        link: function (scope, element, attrs) {

            element.on('error', function(event) {
                element.replaceWith("<div class='error'>Video is missing</div>");
            });
        }
    };
});
