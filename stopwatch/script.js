var minute = 0;
var second = 0;
var millisecond = 0;
var timer;

$("#timeText").text(`${minute}:${second}:${millisecond}`);

$("#resetButton").on("mouseup", function () {
    minute = 0;
    second = 0;
    millisecond = 0;
    $("#timeText").text(`${minute}:${second}:${millisecond}`);
});

$("#startButton").on('mouseup', function (){
    stopwatchStart();
});
$("#stopButton").on('mouseup', function (){
    stopwatchStop();
});

var stopwatchStart = () => {
    timer = setInterval(function() {
        if (millisecond < 100){
            millisecond += 1;
        } else {
            if (second < 59) {
                second += 1;
                millisecond = 0;
            } else {
                minute += 1;
                second = 0;
                millisecond = 0;
            }
        }
        $("#timeText").text(`${minute}:${second}:${millisecond}`);
    }, 10)
}
var stopwatchStop = () => {
    clearInterval(timer);
}

