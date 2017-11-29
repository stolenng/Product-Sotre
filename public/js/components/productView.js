angular.module('prodManagement').component('productView', {
    templateUrl: 'js/templates/product-view.html',
    require: {
		storeCtrl: '^store'
	},
    bindings: {
        'selected': '<'
    },
    controller: function ($products) {
    	var ctrl = this;

    	this.$onInit = function() {
            var index = ctrl.storeCtrl.selectedProductId || 0;
    		ctrl.product = ctrl.storeCtrl.products ? ctrl.storeCtrl.products[index] : [];
    	}

        this.$onChanges = function(changes) {
            if (changes.selected) {
            ctrl.product = ctrl.storeCtrl.products ? ctrl.storeCtrl.products[changes.selected.currentValue] : [];
            ctrl.product.date = new Date(ctrl.product.date);
            }
        }
    }
});