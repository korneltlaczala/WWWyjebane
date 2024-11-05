var timeout = 10;
var counter = 0;
var width = 0;
var height = 0;
var step = 3;
var level = 0;

window.onload = function() {
    console.log("window.siema");
    width = window.innerWidth || document.documentElement.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight;

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        initialize_button(buttons[i]);
    }
    display_counter();
    display_level();
}

function initialize_button(button) {
    // on button hover call button_clicked
    button.onmouseover = button_clicked;
    var x = Math.round(Math.random() * (width - button.offsetWidth));
    var y = Math.round(Math.random() * (height - button.offsetHeight));
    console.log("x: " + x + " y: " + y);
    button.style.left = x + "px";
    button.style.top = y + "px";
    var timer_handler = create_timer_handler(button, x, y)
    timer_handler();
}

function button_clicked() {
    if (this.className == "positive")
        counter += 5;
    if (this.className == "negative")
        counter -= 10;
    if (counter >= 20) {
        counter = 0;
        var button = document.createElement("button");
        button.className = "negative";
        document.body.appendChild(button);
        initialize_button(button);
        step = step * 1.2;
        level += 1;
    }
    if (counter < 0) {
        counter = 0;
        step = step / 1.1;
        level -= 1;
    }
    display_counter();
    display_level();
}


function create_timer_handler(button, x, y) {
    return function() {
        x += Math.round(Math.random() * step*2 - step);
        y += Math.round(Math.random() * step*2 - step);
        if (x > width - button.offsetWidth) {
            x = width - button.offsetWidth;
        } else if (x < 0) {
            x = 0;
        }
        if (y > height - button.offsetHeight) {
            y = height - button.offsetHeight;
        } else if (y < 0) {
            y = 0;
        }
        button.style.left = x + "px";
        button.style.top = y + "px";
        setTimeout(create_timer_handler(button, x, y), timeout);
    };
}

function display_counter() {
    var div_counter = document.getElementById("counter");
    while (div_counter.childNodes.length) {
        div_counter.removeChild(div_counter.childNodes[0]);
    }
    var text_counter = document.createTextNode("Score: " + counter);
    div_counter.appendChild(text_counter);
}

function display_level() {
    var div_level = document.getElementById("level");
    while (div_level.childNodes.length) {
        div_level.removeChild(div_level.childNodes[0]);
    }
    var text_level = document.createTextNode("Level: " + level);
    div_level.appendChild(text_level);
}