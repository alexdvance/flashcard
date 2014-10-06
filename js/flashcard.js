var flashcard = angular.module('flashcard', []);

flashcard.controller('FlashcardQuizCtrl', function($scope, $http) {
	$scope.takeQuiz = function() {
		$http.get('https://api.mongolab.com/api/1/databases/flashcard/collections/QUESTIONS/?apiKey=2oG0UQM7BSXLG2XtawERrJtviFj5yzTf').
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.questions = data;
				$scope.$apply();
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('error');
			});
	};
});

flashcard.controller('FlashcardConfigCtrl', function($scope, $http) {
	$scope.submitQuestionConfig = function() {
		$scope.id = 1;
		$http.put('https://api.mongolab.com/api/1/databases/flashcard/collections/QUESTIONS/' + 
			 $scope.id + '?apiKey=2oG0UQM7BSXLG2XtawERrJtviFj5yzTf',
		{'question'  : $scope.question1,
				'answers': [
					$scope.answer1_1,
					$scope.answer1_2,
					$scope.answer1_3,
					$scope.answer1_4
				 ],
				 'correct' : $scope.correct
		}).success(function (data, status, headers, config) {
					 // $scope.refreshGrid();
					 // $scope.id = '';
					 // $scope.party = {}
					 // $scope.SaveButton = "Add";
		}).error(function (data, status, headers, config) { alert(status) });
	};

// 	var defaultQuestionJson = [
// 		{"question": "Are lamps bright?",
// 			"answers": [
// 				"Dude. Yeah.",
// 				"...No, not really...?",
// 				"Depends on the lamp.",
// 				"My lamp is bright as hell, tbvh."
// 			],
// 			"correct" : 3
// 		},
// 		{"question": "Do you like radiators?",
// 			"answers": [
// 				"Gotta have paint on em\".",
// 				"...No, not really...?",
// 				"Depends on the radiator.",
// 				"My radiator is swag as hell, tbvh."
// 			],
// 			"correct" : 4
// 		},
// 		{"question": "What did you eat for dinner?",
// 			"answers": [
// 				"A burrito.",
// 				"A burrito with chips",
// 				"Doritos Locos taco doritos ice cream.",
// 				"Big bag of expired lollipops."
// 			],
// 			"correct" : 2
// 		}
// 	];

});