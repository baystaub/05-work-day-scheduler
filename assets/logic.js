//sets current time and date
//all global variables
var todayDate = moment().format('MMM Do, YYYY')
var todayTime = moment().format('h:mm:ss a')
var datetime = null,
    date = null;
var now = new Date().getHours();
var update = function() {
    date = moment(new Date())
    datetime.html(date.format('h:mm a'));
};
//inserts those variable into the text at the currenttime and currentdate id's
$('#currentDay').text(todayDate);
$("#currentTime").text(todayTime);


//buttons and getting local storage for items
eightA();
nineA();
tenA();
elevenA();
twelveA();
oneP();
twoP()
threeP();
fourP();
fiveP();

//updates the clock every second.
$(document).ready(function() {
    datetime = $('#currentTime')
    update();
    setInterval(update, 1000);
});
//sets the background for present,past,and future background
time();

//Buttons  below

function eightA() {
    var input_textarea = document.querySelector("#text8a");
    var output_div = document.querySelector("#text8a");
    var save_button = document.querySelector("#btn8a");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content1");
    input_textarea.value = localStorage.getItem("content1");

    function updateOutput() {
        localStorage.setItem("content1", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function nineA() {
    var input_textarea = document.querySelector("#text9a");
    var output_div = document.querySelector("#text9a");
    var save_button = document.querySelector("#btn9a");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content2");
    input_textarea.value = localStorage.getItem("content2");

    function updateOutput() {
        localStorage.setItem("content2", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function tenA() {
    var input_textarea = document.querySelector("#text10a");
    var output_div = document.querySelector("#text10a");
    var save_button = document.querySelector("#btn10a");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content3");
    input_textarea.value = localStorage.getItem("content3");

    function updateOutput() {
        localStorage.setItem("content3", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function elevenA() {
    var input_textarea = document.querySelector("#text11a");
    var output_div = document.querySelector("#text11a");
    var save_button = document.querySelector("#btn11a");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content4");
    input_textarea.value = localStorage.getItem("content4");

    function updateOutput() {
        localStorage.setItem("content4", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function twelveA() {
    var input_textarea = document.querySelector("#text12a");
    var output_div = document.querySelector("#text12a");
    var save_button = document.querySelector("#btn12a");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content5");
    input_textarea.value = localStorage.getItem("content5");

    function updateOutput() {
        localStorage.setItem("content5", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function oneP() {
    var input_textarea = document.querySelector("#text1p");
    var output_div = document.querySelector("#text1p");
    var save_button = document.querySelector("#btn1p");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content6");
    input_textarea.value = localStorage.getItem("content6");

    function updateOutput() {
        localStorage.setItem("content6", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function twoP() {
    var input_textarea = document.querySelector("#text2p");
    var output_div = document.querySelector("#text2p");
    var save_button = document.querySelector("#btn2p");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content7");
    input_textarea.value = localStorage.getItem("content7");

    function updateOutput() {
        localStorage.setItem("content7", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function threeP() {
    var input_textarea = document.querySelector("#text3p");
    var output_div = document.querySelector("#text3p");
    var save_button = document.querySelector("#btn3p");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content8");
    input_textarea.value = localStorage.getItem("content8");

    function updateOutput() {
        localStorage.setItem("content8", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function fourP() {
    var input_textarea = document.querySelector("#text4p");
    var output_div = document.querySelector("#text4p");
    var save_button = document.querySelector("#btn4p");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content9");
    input_textarea.value = localStorage.getItem("content9");

    function updateOutput() {
        localStorage.setItem("content9", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

function fiveP() {
    var input_textarea = document.querySelector("#text5p");
    var output_div = document.querySelector("#text5p");
    var save_button = document.querySelector("#btn5p");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content10");
    input_textarea.value = localStorage.getItem("content10");

    function updateOutput() {
        localStorage.setItem("content10", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }
}

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