//sets current time and date
var todayDate = moment().format('MMM Do, YYYY')
var todayTime = moment().format('h:mm:ss a')
var datetime = null,
    date = null;
//inserts those variable into the text at the currenttime and currentdate id's
$('#currentDay').text(todayDate);
$("#currentTime").text(todayTime);
//s
function setbutton() {
    text8a.text('');
    var WTD8 = prompt('What to do?');
    text8a.text(WTD8);
    localStorage.setItem('8:00 am', WTD8);
};






//DO NOT TOUCH!!!!
//i will hurt you!!

var update = function() {
    date = moment(new Date())
    datetime.html(date.format('h:mm a'));
};

var now = new Date().getHours();

function time() {
    if (now > 8) {
        $("#8a").addClass("past");
    } else if (now >= 8 && now < 9) {
        $("#8a").addClass("present");
    } else if (now < 8) {
        $("#8a").addClass("future");
    }
    if (now > 9) {
        $("#9a").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#9a").addClass("present");
    } else if (now < 9) {
        $("#9a").addClass("future");
    }
    if (now > 10) {
        $("#10a").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#10a").addClass("present");
    } else if (now < 10) {
        $("#10a").addClass("future");
    }
    if (now > 11) {
        $("#11a").addClass("past");
    } else if (now >= 11 && now < 12) {
        $("#11a").addClass("present");
    } else if (now < 11) {
        $("#11a").addClass("future");
    }
    if (now > 12) {
        $("#12a").addClass("past");
    } else if (now >= 12 && now < 13) {
        $("#12a").addClass("present");
    } else if (now < 12) {
        $("#12a").addClass("future");
    }
    if (now > 13) {
        $("#1p").addClass("past");
    } else if (now >= 13 && now < 14) {
        $("#1p").addClass("present");
    } else if (now < 13) {
        $("#1p").addClass("future");
    }
    if (now > 14) {
        $("#2p").addClass("past");
    } else if (now >= 14 && now < 15) {
        $("#2p").addClass("present");
    } else if (now < 14) {
        $("#2p").addClass("future");
    }
    if (now > 15) {
        $("#3p").addClass("past");
    } else if (now >= 15 && now < 16) {
        $("#3p").addClass("present");
    } else if (now < 15) {
        $("#3p").addClass("future");
    }
    if (now > 16) {
        $("#4p").addClass("past");
    } else if (now >= 16 && now < 17) {
        $("#4p").addClass("present");
    } else if (now < 16) {
        $("#4p").addClass("future");
    }
    if (now > 17) {
        $("#5p").addClass("past");
    } else if (now >= 17 && now < 18) {
        $("#5p").addClass("present");
    } else if (now < 17) {
        $("#5p").addClass("future");
    }
}
time();
//updates the clock every second.
$(document).ready(function() {
    datetime = $('#currentTime')
    update();
    setInterval(update, 1000);
});