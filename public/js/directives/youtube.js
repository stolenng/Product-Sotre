
angular.module('videoFeed').directive('youtube', function ($window, YoutubeApiService) {
    return {
        restrict: "E",
        scope: {
            videoid: "@"
        },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            YoutubeApiService.onReady(function() {
                player = setupPlayer(scope, element);
            });

            function setupPlayer(scope, element) {
                return new YT.Player(element.children()[0], {
                    height: '310',
                    width: '100%',
                    videoId: scope.videoid,
                    events: {
                        'onError': function(event){
                            element.replaceWith("<div class='error'>Youtube video is missing</div>");
                            //console.log(event);
                        }
                    }
                });
            }
        }
    };
});
