// JavaScript code

let today = new Date();

// get month names
function displayCurrentMonthName() {

    function getMonthNames() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const currentMonth = monthNames[today.getUTCMonth()];
        return currentMonth;
    }

    const monthListDiv = document.getElementById("months-list");
    monthListDiv.innerHTML = getMonthNames();
}

displayCurrentMonthName();


// get current year
function displayCurrentYear() {
    let currentYear = today.getUTCFullYear();

    const yearDiv = document.getElementById("years-list");
    yearDiv.innerHTML = currentYear;

}

displayCurrentYear();

// get days of the week
function displayWeekDays() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const cells = document.querySelectorAll(".cell-days-week");

    for (let i = 0; i < daysOfWeek.length; i++) {
        cells[i].innerHTML = daysOfWeek[i];
    }
}

displayWeekDays()

// highlight today's date
function highlightToday() {
    // get number of days in current month
    const firstDayOfCurrentMonth = new Date(today.getUTCFullYear(), today.getUTCMonth(), 1);
    const startDayOfCurrentMonthInWeek = firstDayOfCurrentMonth.getUTCDay();

    const lastDayOfCurrentMonth = today.getUTCMonth() <= 11
        ? new Date(today.getUTCFullYear(), today.getUTCMonth() + 1, 0)
        : new Date(today.getUTCFullYear() + 1, 1, 0);

    let numberOfDaysInCurrentMonth = lastDayOfCurrentMonth.getUTCDate();

    const cells = document.querySelectorAll(".cell-days-number");

    for (var i = 0, j = 1, k = startDayOfCurrentMonthInWeek; i < numberOfDaysInCurrentMonth; i++, j++, k++) {
        // cells[i + startDayOfCurrentMonthInWeek].innerHTML = i + 1;
        cells[k].innerHTML = j;
    }

    removeExtraLines(k - 1, cells);

    // highlight today
    cells[startDayOfCurrentMonthInWeek + today.getUTCDate() - 1].classList.add("highlight");
}

function removeExtraLines(lastIndexOfMonth, cells) {
    if (lastIndexOfMonth >= 35) {
        return
    };

    let start;

    if (lastIndexOfMonth < 28) {
        start = 28;
    } else {
        start = 35;
    }

    for (let i = start; i <= 41; i++) {
        cells[i].classList.add("hidden");
    }
}

highlightToday();