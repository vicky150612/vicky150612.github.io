window.onload = function () {
    var dayOfWeek = new Date().getDay();
    var message;

    switch (dayOfWeek) {
        case 0:
            message = "Sunday";
            break;
        case 1:
            message = "Monday";
            break;
        case 2:
            message = "Tuesday";
            break;
        case 3:
            message = "Wednesday";
            break;
        case 4:
            message = "Thursday";
            break;
        case 5:
            message = "Friday";
            break;
        case 6:
            message = "Saturday";
            break;
        default:
            message = "Invalid day of the week";
    }

    document.getElementById("dayOfWeek").innerHTML = message;

    var tableRows = document.querySelectorAll("tbody tr");
    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = "none";
    }

    var currentDayTable = document.getElementById(message);
    if (currentDayTable) {
        var currentDayRows = currentDayTable.getElementsByTagName("tr");
        for (var i = 0; i < currentDayRows.length; i++) {
            currentDayRows[i].style.display = "";
        }
    }
};