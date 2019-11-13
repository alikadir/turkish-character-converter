function autoGrow(e) {
    e.target.style.height = "5px";
    e.target.style.height = (e.target.scrollHeight) + "px";
}


function convert() {
    let text = document.querySelector('textarea').value;
    let convertedText = DeasciifyHandler.deasciifyText(text);
    document.querySelector('.result').innerText = convertedText;

    writeClipboard(convertedText);
}

function writeClipboard(text) {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.writeText(text).then(function () {
                notify('wrote on clipboard')
            }, function () {
                notify('cannot write on clipboard!');
            });
        }
    });
}

function notify(message) {
    let notifyElement = document.querySelector('#notification');
    notifyElement.innerHTML = message;
    notifyElement.style.animation = "";
    setTimeout(function () {
        notifyElement.style.animation = "shine 3s"
    }, 300);

}

function autoResize(e) {
    if (e.target.checked)
        document.querySelector('textarea').addEventListener('input', autoGrow);
    else
        document.querySelector('textarea').removeEventListener('input', autoGrow)
}

document.addEventListener("DOMContentLoaded", function (event) {
    DeasciifyHandler.init();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js');
    }
    window.addEventListener("online", function(){
        notify("you are online");
    });
    window.addEventListener("offline", function () {
        notify("you are offline!");
    });

    document.querySelector('input[type=checkbox]').addEventListener('click', autoResize);
    document.querySelector('button').addEventListener('click', convert);
});
