angular.module('prodManagement').component('products', {
    templateUrl: 'js/templates/products.html',
    require: {
		storeCtrl: '^store'
	},
	bindings: {
		products: '<'
	},
    controller: function ($products) {
    	var ctrl = this;

    	this.$onInit = function() {
    		
    	}

    	this.$onChanges = function(changes) {
            if (changes.products && changes.products.currentValue) {
                ctrl.products = ctrl.products;

                ctrl.products.forEach(function(value, index) {
                    value.date = new Date(value.date);
                });
            }
        }
    }
});