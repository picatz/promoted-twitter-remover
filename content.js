window.onload = function () {
    document.getElementsByClassName("trends")[0].hidden = true
    Array.from(document.getElementsByClassName("Icon--promoted")).map(e => e.parentElement.parentElement.parentElement.parentElement.hidden = true);
}

window.onchange = function () {
    document.getElementsByClassName("trends")[0].hidden = true
    Array.from(document.getElementsByClassName("Icon--promoted")).map(e => e.parentElement.parentElement.parentElement.parentElement.hidden = true);
}

window.onscroll = function () {
    Array.from(document.getElementsByClassName("Icon--promoted")).map(e => e.parentElement.parentElement.parentElement.parentElement.hidden = true);
}