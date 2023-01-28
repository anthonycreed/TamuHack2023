const childWindow = document.getElementById('frame').contentWindow;
window.addEventListener('message', message => {
    if (message.source !== childWindow) {
        return; 
    }
    document.getElementById('test').innerHTML = "pizza pie";
});