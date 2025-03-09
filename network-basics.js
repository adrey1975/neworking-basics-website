$(function() {
    // Submit button click event
    $(".submit").click(function() {
        var score = 0;
        const totalQuestions = 1;

        $(".question").each(function() {
            var selectedAnswer = $(this).find("input[type='radio']:checked").val();
            var correctAnswer = $(this).find(".options").data("answer");

            if (selectedAnswer == correctAnswer) {
                score++;
            }
        });

        // Hide the quiz question and show the result
        $('.options').slideUp();
        $('.result').fadeIn();
        

        // Display the result
        $(".score").text(score + " out of " + totalQuestions);
        var assessment = "";
        if (score == totalQuestions) {
            assessment = "Excellent!";
        } else {
            assessment = "Better luck next time!";
        }
        $(".assessment").text(assessment);
        $(".result").show();
        $("#next").show();
        $(".alert").show();
    });
});