(function($){
	$(function(){
		//quiz progression
		$("#quiz-config").on("click", function(e){
			e.preventDefault();
			$(".section-config").removeClass("hide");
			$(".section-quiz").addClass("hide");
		});
		$("#quiz-take").on("click", function(e){
			e.preventDefault();
			$(".section-quiz").removeClass("hide");
			$(".section-config").addClass("hide");
			$(".quiz-cards .quiz-card").first().removeClass("hide");
		});
		
	});
})(jQuery);