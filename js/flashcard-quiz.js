(function($){
	var score = 0;

	$(function(){
		//quiz progression
		$("#quiz-config").on("click", function(e){
			e.preventDefault();
			$(".section-config").removeClass("hide");
			$(".section-quiz").addClass("hide");
			resetQuiz();
		});
		$("#quiz-take").on("click", function(e){
			e.preventDefault();
			$(".section-quiz").removeClass("hide");
			$(".section-config").addClass("hide");
			runQuiz(0);
		});
	});

	var resetQuiz = function() {
		$(".quiz-card, .next-question-fields").addClass("hide");
		$(".quiz-answer-radio").prop({"disabled": false, "checked": false});
		score = 0;
		$("#quiz-score").text(score);
	}

	var runQuiz = function(currentQuestionCount) {
		var currentCard = $(".quiz-cards .quiz-card").eq(currentQuestionCount);
		var totalQuestionCount = $(".quiz-cards .quiz-card").length;
		var isLastQuestion = currentQuestionCount + 1 == totalQuestionCount;

		currentCard.removeClass("hide");

		$(".quiz-answer-radio").on("click", function(e) {
			var choseCorrectAnswer = $(this).data("answer-number") == currentCard.data("answer-correct");

			// Dom juggling after picking answer
			currentCard.find(".quiz-answer-radio").prop("disabled", true);
			currentCard.find(".next-question-fields").removeClass("hide");

			// Right/wrong answer conditional
			if(choseCorrectAnswer) {
				currentCard.find(".error").addClass("hide");
				score++;
				$("#quiz-score").text(score);
			} else {
				currentCard.find(".success").addClass("hide");
			}

			// Last question handling
			if(isLastQuestion) {
				var quizFinishedHTML = "<h4>Congrats! You've finished the quiz. Your score is " + score + ".";
				currentCard.find(".next-question").addClass("hide");
				currentCard.find(".next-question-fields").append(quizFinishedHTML);
			}
		});

		currentCard.find(".next-question").on("click", function(e) {
			currentCard.addClass("hide");
			runQuiz(currentQuestionCount + 1)
		});
	}
})(jQuery);