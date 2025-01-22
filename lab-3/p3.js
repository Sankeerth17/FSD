function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) callback();
    }, delay);
}

delayedMessage("Hello, Sankeerth!", 2000, () => {
    console.log("Message has been printed.");
});
