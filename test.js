let usd = document.getElementById('dollar');
let egp = document.getElementById('pound');

usd.onkeyup = function a() {
    if (usd.value >= 0) {
        egp.value = (usd.value * 15.6).toFixed(1);
    }
}

egp.onkeyup = function a() {
    if (usd.value >= 0) {
        usd.value = (egp.value / 15.6).toFixed(1);
    }
}