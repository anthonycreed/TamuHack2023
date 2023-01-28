childWindow = document.getElementById("UI_box")

window.addEventListener('message', message => {
    document.getElementById('test').innerHTML = message.data["poke"];
});