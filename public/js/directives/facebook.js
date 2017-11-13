
angular.module('videoFeed').directive('facebook', function ($window, YoutubeApiService) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            videoid: "@"
        },
        template: "<iframe ng-src='{{generateSrc(videoid)}}' width='100%' height='310' frameborder='0'></iframe>",
        //template: "<div class='fb-video' data-href='https://www.facebook.com/facebook/videos/{{videoid}}/' data-allowfullscreen='true'></div>",
        link: function (scope, element, attrs) { 
            
            scope.generateSrc = function (id) {
                return "https://www.facebook.com/video/embed?video_id=" + id;                
            }
            
            window.fbAsyncInit = function () {
                FB.init({
                    appId: 140253343288116,
                    xfbml: true,
                    version: 'v2.9'
                });

                var my_video_player;
                FB.Event.subscribe('xfbml.ready', function (msg) {
                    if (msg.type === 'video') {
                        console.log(msg);
                        my_video_player = msg.instance;
                    }

                    my_video_player.subscribe('startedPlaying', function (event) {
                        console.log("facebook video started");
                    });

                    my_video_player.subscribe('error', function (event) {
                        element.replaceWith("<div class='error'>Facebook video is missing</div>");
                    });
                });

            };
        }
    };
});
