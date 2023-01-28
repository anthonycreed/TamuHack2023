
function updateBox(htmlPhrase) {
    document.getElementById('lessonID').innerHTML = htmlPhrase;
}

function main() {
    updateBox("<button> Hello </button>");
}