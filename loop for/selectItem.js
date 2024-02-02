ano = new Date().getFullYear()

for (i = ano; i >= 1920; i--) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}