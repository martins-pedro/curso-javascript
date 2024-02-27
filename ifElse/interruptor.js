function onOff() {
    let body = document.getElementById("body");
    if (body.className == "on") {
        body.style.backgroundColor = "black"
        body.className = "off"
    } else if (body.className == "off") {
        body.style.backgroundColor = "white"
        body.className = "on"
    }
}
