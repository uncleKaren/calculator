let value = [];

document.querySelector(".numbers").addEventListener("click", function (e) {
    const btn = e.target;
    let screen = document.querySelector("h1");

    if (btn.classList.contains("num") && btn.innerHTML == "x") {
        e.preventDefault();
        value.push("*");
        screen.innerHTML = value.join('');
    }
    else if (btn.classList.contains("num") && btn.innerHTML != "AC" && btn.innerHTML != "=") {
        e.preventDefault(); // stop the button if not type=button 
        value.push(btn.innerHTML);
        screen.innerHTML = value.join('');
    } else if (btn.classList.contains("num") && btn.innerHTML == "AC") {
        value = [];
        screen.innerHTML = "0";
    } else if (btn.classList.contains("num") && btn.innerHTML == "=") {
        let valueString = value.join('');
        screen.innerHTML = eval(valueString);
    };
});

console.log(value);