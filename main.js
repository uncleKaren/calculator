//document.querySelector("h1").innerHTML = document.querySelector(".num8").innerHTML;

let value = [];

document.querySelector(".numbers").addEventListener("click", function(e){
    const btn = e.target;
    let screen = document.querySelector("h1");
    if (btn.classList.contains("num") && btn.innerHTML != "AC"){
        e.preventDefault(); // stop the button if not type=button 
        //alert(btn.innerHTML);
        value.push(btn.innerHTML);
        screen.innerHTML = value.join('');
    };
});

console.log(value);