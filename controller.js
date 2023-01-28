
function updateBox(htmlPhrase) {
    document.getElementById('lessonID').innerHTML = htmlPhrase;
}

function main() {
    updateBox("<p>Hello World</p>");
}