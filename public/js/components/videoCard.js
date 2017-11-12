angular.module('videoFeed').component('videoCard', {
    templateUrl: 'js/templates/video-card.html', 
    bindings: {
        data: '=',
    }
});