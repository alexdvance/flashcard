var flashcard = angular.module('flashcard', ['angularLocalStorage', 'ngCookies']);

flashcard.controller('FlashcardCtrl', function($scope, storage) {
	// storage.bind($scope,'question-1',{defaultValue: 'Are lamps bright?' ,storeName: 'question-1'});
	// storage.bind($scope,'varName',{defaultValue: 'randomValue123' ,storeName: 'customStoreKey'});
	var questionJson = [
		{"question": "Are lamps bright?",
			"answers": [
				"Dude. Yeah.",
				"...No, not really...?",
				"Depends on the lamp.",
				"My lamp is bright as hell, tbvh."
			],
			"correct" : 3
		},
		{"question": "Do you like radiators?",
			"answers": [
				"Gotta have paint on em\".",
				"...No, not really...?",
				"Depends on the radiator.",
				"My radiator is swag as hell, tbvh."
			],
			"correct" : 4
		},
		{"question": "What did you eat for dinner?",
			"answers": [
				"A burrito.",
				"A burrito with chips",
				"Doritos Locos taco doritos ice cream.",
				"Big bag of expired lollipops."
			],
			"correct" : 2
		}
	];
	storage.set('questionKey', questionJson);
	$scope.questions = storage.get('questionKey');

	$scope.question1 = $scope.questions[0].question;

});