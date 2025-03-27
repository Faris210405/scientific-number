function saveFile() {
    alert("Save function triggered!");
}

function saveAsFile() {
    alert("Save As function triggered!");
}

function copyText() {
    let input = document.getElementById("numberInput");
    input.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("numberInput").value = text;
    }).catch(err => {
        alert("Failed to paste text.");
    });
}

function runFunction() {
    alert("Run function executed!");
}

function aboutUs() {
    alert("Faris Alwarits Harun (231011060069)");
}

function checkNumber() {
    let num = document.getElementById("numberInput").value;
    if (!isNaN(num)) {
        alert("Valid number!");
    } else {
        alert("Invalid number!");
    }
}
