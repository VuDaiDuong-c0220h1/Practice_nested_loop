let html = "";
for (i = 1 ; i <= 10; i++) {
    html += "<tr>";
    for (j = 1 ; j <= 10; j++) {
        html += "<td>" + i * j + "</td>";
    }
    html += "</tr>";
}
document.getElementById("content").innerHTML = html;