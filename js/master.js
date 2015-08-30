// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
		perquestionResponseAnswers: true,
		perQuestionResponseMessaging: true,
		backButtonText: "Back",
		tryAgainText: "Try Again",
		events: {
			onCompleteQuiz: function(result) {
				if(result.questionCount == result.score) {
					$("body").fireworks();
				}
			}
		}
	});
});
