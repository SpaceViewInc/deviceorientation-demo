(function (fn) {
    try {
        fn();
    } catch (err) {
        alert('Error');
    }
})(function () {
    'use strict';

    function onDeviceOrientation(event) {
        var container = document.getElementsByClassName('deviceorientation-data')[0];
        if (!container) {
            alert('Cannot find container');
            return;
        }
        var alphaEl = container.getElementsByClassName('value-alpha')[0];
        var betaEl = container.getElementsByClassName('value-beta')[0];
        var gammaEl = container.getElementsByClassName('value-gamma')[0];
        if (!alphaEl || !betaEl || !gammaEl) {
            alert('Cannot find output element');
            return;
        }
        alphaEl.innerText = String(event.alpha);
        betaEl.innerText = String(event.beta);
        gammaEl.innerText = String(event.gamma);
    }
    window.addEventListener('deviceorientation', onDeviceOrientation);
});
