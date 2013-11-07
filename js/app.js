function onDeviceReady() {
    if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
}
 
document.addEventListener('deviceready', onDeviceReady, false);

app = angular.module('arvodeApp', ['ngSanitize']);

app.factory("kalkService", function() {
	return {
		kalkState: {
			members: 12,
			apartments: 8,
			meetings: 12,
			external: false,
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
		}
		
		try {
			return ($scope.showTable[parseInt(sliderval)][i] >= n)
		} catch(e) {
			// If this happens, it's most likely because the value is out of range
			return true
		}
	}
}]);
app.controller('KalkDCtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
}]);
app.controller('KalkECtrl', ['$scope', 'kalkService', function($scope, kalkService) {
	$scope.kalkState = kalkService.kalkState
	$scope.lghValueTable = {
		3: 800,
		11: 750,
		16: 710,
		26: 680,
		36: 670,
		46: 660,
		56: 650,
		66: 642,
		76: 635,
		86: 630,
		96: 625,
		106: 620,
		116: 615,
		126: 612,
		136: 608,
		150: 604,
		165: 601,
		180: 598,
		190: 596,
		200: 595,
		210: 594,
		220: 593,
		230: 592,
		240: 591,
		250: 590,
		260: 589,
		270: 588,
		280: 587,
		290: 586,
		300: 585,
		310: 584, 
		320: 583,
		330: 582,
		340: 581,
		350: 580,
		360: 579,
		370: 578,
		380: 577,
		390: 576,
		400: 575,
		410: 574,
		420: 573,
		430: 572,
		440: 571,
		450: 570
	}

	$scope.result = function() {
		var indexAdjustment = 0
		var meetingValueMultiplier = 400 * (1 + indexAdjustment)
		var reconstructionMultiplier = 1.2
		var externalMultiplier = 0.7
		var salaryCap = 260000
		
		var apartmentValue = Math.min(vlookup(parseInt($scope.kalkState.apartments), $scope.lghValueTable) * $scope.kalkState.apartments, salaryCap)
		var meetingValue = $scope.kalkState.members * $scope.kalkState.meetings * meetingValueMultiplier
		
		apartmentValue = apartmentValue * (1 + indexAdjustment)
		apartmentValue = $scope.kalkState.reconstruction ? apartmentValue * reconstructionMultiplier : apartmentValue
		apartmentValue = $scope.kalkState.external ? apartmentValue * externalMultiplier : apartmentValue
		
		var result = Math.floor((apartmentValue + meetingValue) / $scope.kalkState.members);
		var thousand = parseInt(result/1000);
		var rest = result/1000 - Math.floor(result/1000);
		var right = '' + parseInt(rest*(1000 + 0.0001));
		
		while(right.length < 3){
			right = '0' + right;
		}	
		
		return result >= 1000 ? thousand +  ' ' + right : result;
	}
	
	$scope.resultBoard = function() {
		var indexAdjustment = 0
		var meetingValueMultiplier = 400 * (1 + indexAdjustment)
		var reconstructionMultiplier = 1.2
		var externalMultiplier = 0.7
		var salaryCap = 260000
		
		var apartmentValue = Math.min(vlookup(parseInt($scope.kalkState.apartments), $scope.lghValueTable) * $scope.kalkState.apartments, salaryCap)
		var meetingValue = $scope.kalkState.members * $scope.kalkState.meetings * meetingValueMultiplier
		
		apartmentValue = apartmentValue * (1 + indexAdjustment)
		apartmentValue = $scope.kalkState.reconstruction ? apartmentValue * reconstructionMultiplier : apartmentValue
		apartmentValue = $scope.kalkState.external ? apartmentValue * externalMultiplier : apartmentValue
		
		var result = Math.floor((apartmentValue + meetingValue) / $scope.kalkState.members) * $scope.kalkState.members;
		var thousand = parseInt(result/1000);
		var rest = result/1000 - Math.floor(result/1000);
		var right = '' + parseInt(rest*(1000 + 0.0001));
		
		while(right.length < 3){
			right = '0' + right;
		}	
		
		return result >= 1000 ? thousand +  ' ' + right : result;
	}
	
}]);

function vlookup(needle, table) {
	var ret = 0;
	for(key in table) {
		if(key <= needle) {
			ret = table[key]
		}
	}
	return ret
}
