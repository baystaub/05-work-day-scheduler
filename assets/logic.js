var todayDate = moment().format('MMM Do, YYYY')
var todayTime = moment().format('h:mm a')
$('#currentDay').text(todayDate);
$("#currentTime").text(todayTime);