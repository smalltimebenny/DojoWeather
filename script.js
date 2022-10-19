function popOut() {
    cookie_popup.remove();
}

function loadWeather(){
    alert("Loading weather report...");
}

function changeToF(){
    let current_setting = document.getElementById("temp").value;
    console.log(current_setting)
    if (current_setting == "farenheit") {
        document.querySelectorAll('.convert').forEach(
            elm => {
            let degree = elm.innerText * 9 / 5 + 32;
            elm.innerText = Math.round(degree);
        }
        )
    } 
}

function changeToC(){
    let current_setting = document.getElementById("temp").value;
    console.log(current_setting)
    if (current_setting == "celcius") {
        document.querySelectorAll('.convert').forEach(
            elm => {
            let degree = (elm.innerText - 32) * 5 / 9;
            elm.innerText = Math.round(degree);
        }
        )
    } 
}