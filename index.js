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

    // local notification
    if (document.querySelector('textarea').value.toLowerCase().includes('notify')) {


        if (Notification.permission == 'granted') {
            navigator.serviceWorker.getRegistration().then(function (reg) {
                const options = {
                    body: message,
                    icon: 'images/icons/waving-hand.png',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    },
                    actions: [
                        {
                            action: 'explore', title: 'I get it',
                            icon: 'images/icons/up.png'
                        },
                        {
                            action: 'close', title: 'Close notification',
                            icon: 'images/icons/face-palm.png'
                        },
                    ]
                };
                console.log(options);
                reg.showNotification('hey!', options);
            });
        } else
            console.log('has not notification permission!');
    }


}

function autoResize(e) {
    if (e.target.checked)
        document.querySelector('textarea').addEventListener('input', autoGrow);
    else
        document.querySelector('textarea').removeEventListener('input', autoGrow)
}

function pasteTextarea() {
    navigator.permissions.query({name: "clipboard-read"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.readText().then(function (text) {             
              if(document.querySelector('textarea').value === "")   
                 document.querySelector('textarea').value = text;
            });
        }
    });
}


document.addEventListener("DOMContentLoaded", function (event) {
    DeasciifyHandler.init();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js');
    }
    window.addEventListener("online", function () {
        notify("you are online");
    });
    window.addEventListener("offline", function () {
        notify("you are offline!");
    });

    document.querySelector('input[type=checkbox]').addEventListener('click', autoResize);
    document.querySelector('button').addEventListener('click', convert);
    document.querySelector('textarea').addEventListener('click', pasteTextarea);

    Notification.requestPermission().then(function (permission) {
        console.log(permission)
    });
});
