app = angular.module('arvodeApp', ['ngSanitize']);

app.factory("kalkService", function() {
	return {
		kalkState: {
			members: 12,
			apartments: 8,
			meetings: 12,
			external: true,
			reconstructions: false
		}
	}
})

app.factory("packageService", function() {
	return {
		packageState: {
			selected: packages[0]
		}
	}
})

app.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
		for(var i = 0; i < total; i++)
			input.push(i);
		return input;
	};
});

app.filter('nl2br', function() {
	return function(input) {
		return input.replace('\n', '<br />\n')
	}
})

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.range = function(num) { return new Array(num); }
}]);
app.controller('PaketListCtrl', ['$scope', 'packageService', function($scope, packageService) {
	$scope.packages = packages
	$scope.packageState = packageService.packageState
}]);
app.controller('PaketContentCtrl', ['$scope', 'packageService', function($scope, packageService) {
	$scope.packages = packages
	$scope.packageState = packageService.packageState
}]);
app.controller('KalkACtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
	$scope.portraits = portraits
	$scope.portraitSeed = Math.floor(Math.random() * (portraits.length+1))
}]);
app.controller('KalkBCtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
}]);
app.controller('KalkCCtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
	$scope.overlaySeed = Math.floor(Math.random() * (7+1))
	$scope.shouldShow = function(sliderval, i, n) {
		if(!$scope.showTable) {
			var additions = [1, 6, 3, 9, 12, 2, 10, 5, 7, 11, 8, 4]
			$scope.showTable = [null, [null,	0, 0, 0,	0, 0, 0,	0, 0, 0,	0, 0, 0] ]
			for(var ii = 0; ii < (36 - 1); ii++) {
				val = JSON.parse(JSON.stringify($scope.showTable[$scope.showTable.length-1]))
				val[additions[ii % (additions.length+1)]] += 1
				$scope.showTable.push(val)
			}
			//console.log(JSON.stringify($scope.showTable, 0, 4))
		}
		
		//console.log([parseInt(sliderval), i, $scope.showTable[parseInt(sliderval)][i]])
		return ($scope.showTable[parseInt(sliderval)][i] >= n)
	}
}]);
app.controller('KalkDCtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
}]);
app.controller('KalkECtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
}]);
