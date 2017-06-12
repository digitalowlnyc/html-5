function waitForEvent(element, event) {
    return new Promise(function(resolve, reject) {
        var listener = function() {
            this.removeEventListener(event, listener);
            resolve();
        };

        element.addEventListener(event, listener);
    });
}
