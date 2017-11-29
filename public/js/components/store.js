    angular.module('prodManagement').component('store', {
    templateUrl: 'js/templates/store.html', 
    controller: function ($products, $sce, $state, $stateParams) {
    	var ctrl = this;

    	this.$onInit = function() {
			ctrl.selectedProductId = $stateParams.id || 0;

    		$products.get().then(function(data) {
    			ctrl.products = data;
    			ctrl.originalData = angular.copy(data);
    			$products.set(data);
    		})
    	};

    	this.filterQuery = function(query) {
    		this.products = angular.copy(ctrl.originalData);
    		
			this.products = this.products.filter(function(prod) {
    			return prod.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    		});
    	};

        this.delete = function(id) {
            this.products.splice(getIndexById(id), 1);

            $products.set(this.products);
        };

        this.select = function(id) {
            $state.go('products', {id : id});
            this.selectedProductId = getIndexById(id);
        };

        this.add = function() {
            this.products.push({
                id: ctrl.products.length,
                name: '',
                date: new Date(),
                description: '',
                price: 0
            });
            this.selectedProductId = ctrl.products.length -1;
        };

        this.save = function(form) {
            var currentProd = this.products[ctrl.selectedProductId],
                err = '';

            if (currentProd.name.length < 4) {
                err += 'Name is too short';
                err+= '</br>';
            }
            if (currentProd.price <= 0) {
                err += 'Please enter price';
                err+= '</br>';
            }
            if (currentProd.description.length <= 5) {
                err += 'Please enter valid description';
                err+= '</br>';
            }

            ctrl.errors = $sce.trustAsHtml(err);

            if (err == '') {
                $products.set(this.products);
            }
        };

    	this.sort = function(type) {
    		if (type === 'name') {
    			this.products = this.products.sort(function(a, b) {
					if(a.name < b.name) return -1;
					if(a.name > b.name) return 1;
					return 0;
    			})
    		}
    		if (type === 'date') {
    			this.products = this.products.sort(function (a,b) {
    				return new Date(b.date) - new Date(a.date);
    			});
    		}
    	};

        function getIndexById(id) {
            var index = 0;

            angular.forEach(ctrl.products, function(prod, prodIndex) {
                if (prod._id == id) {
                    index = prodIndex;
                }
            });

            return index;
        }

    }
});