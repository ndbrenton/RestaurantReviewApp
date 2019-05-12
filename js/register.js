if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register("/sw.js")
        .then(function(reg) {
            // registration worked
            console.log(`Service worker registered: ${reg.scope}`);
        })
        // registration failed
        .catch(function(err) {
            console.log(`Service worker registration failed: ${err}`);
        });
}
// undefined if browser does not support Service Worker
