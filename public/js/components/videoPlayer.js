
angular.module('videoFeed').component('videoPlayer', {
    //use same component for different video templates
    bindings: {
        type: '<',
        videoid: '=',
        videosrc: '='
    },
    template: '<div ng-include="$ctrl.templateUrl">',
    controller: function () {
        var vm = this;
        vm.$onChanges = (changes) => {
            if (changes.type && this.type) {
                this.templateUrl = 'js/templates/' + this.type + '-player.html';
            }
        }
        //for security issues
        vm.generateSrc = function (id) {
            if (vm.type == "youtube") {
                return 'https://www.youtube.com/embed/' + id;
            }
            else if (vm.type == "facebook") {
                return "https://www.facebook.com/video/embed?video_id=" + id;
            }
        }

    }
});