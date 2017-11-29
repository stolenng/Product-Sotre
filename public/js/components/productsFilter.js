angular.module('prodManagement').component('productsFilter', {
    templateUrl: 'js/templates/products-filter.html', 
     require: {
        storeCtrl: '^store'
    },
    controller: function ($products) {
    	var ctrl = this;

    	this.$onInit = function() {
    		ctrl.type = 'date';
    	}
    }
});