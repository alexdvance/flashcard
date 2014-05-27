var flashcard = angular.module('flashcard', []);

flashcard.controller('FlashcardCtrl', function ($scope) {
  $scope.questions = [
    {'question': 'How\'s this working?',
     'answer': 'Pretty good.'},
    {'question': 'How\'s this working now?',
     'answer': 'Iteration is working.'},
    {'question': 'How\'s this working?',
     'answer': 'Three answers! Nice.'}
  ];
});