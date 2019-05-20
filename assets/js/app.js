var quiz = $("#quiz")
var start = $("#start-up")
var scorecard = $("#results")
var correct = 0
var incorrect = 0
var unanswered = 0
var time = 50
var clock = ""
var changeTime = ""
var interval = ""




var startTimer = function () {
    clock = setTimeout(score, 45000)
    changeTime = function () {
        time--;
        $("#timer").html(time)
        if (time === 0) {
            score()
            clearTimeout(clock)
            clearInterval(interval)
        }
        console.log(time)
    }
    interval = setInterval(changeTime, 1000)

}

$("#start").on('click', function () {
    start.css('display', 'none')
    quiz.css('display', 'block')
    startTimer()

})

var score = function () {
    quiz.css('display', 'none')
    scorecard.css('display', 'block')
    for (i = 0; i < $(".questions").length; i++) {

        var $selectedValue = $(".questions")[i].options[$(".questions")[i].selectedIndex].value

        if ($selectedValue === 'true') {
            correct++
        } else if ($selectedValue === 'false') {
            incorrect++
        } else if ($selectedValue === "") {
            unanswered++
        }
    }
    $("#correct").append("<h2>Correct: " + correct + "</h2>")
    $("#incorrect").append("<h2>Incorrect: " + incorrect + "</h2>")
    $("#unanswered").append("<h2>Unanswered: " + unanswered + "</h2>")
    clearTimeout(clock)
    clearInterval(interval)

}


$("#score").on('click', score)




$("#reset").on('click', function () {
    location.reload()
})