function displayType(racer) {
    var racerType = racer.getAttribute("data-racer-type");
    window.alert(racerType + " is a " + racer.innerHTML + " racing driver.")
}