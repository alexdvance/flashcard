var flashcard = angular.module('flashcard', []);

flashcard.controller('FlashcardCtrl', function ($scope) {
  $scope.questions = [
		{'question': 'Are lamps bright?',
			'answers': [
				'Dude. Yeah.',
				'...No, not really...?',
				'Depends on the lamp.',
				'My lamp is bright as hell, tbvh.'
			]
		},
		{'question': 'Do you like radiators?',
			'answers': [
				'Gotta have paint on em\'.',
				'...No, not really...?',
				'Depends on the radiator.',
				'My radiator is swag as hell, tbvh.'
			]
		},
		{'question': 'What did you eat for dinner?',
			'answers': [
				'A burrito.',
				'A burrito with chips',
				'Doritos Locos taco doritos ice cream.',
				'Big bag of expired lollipops.'
			]
		}
  ];
});