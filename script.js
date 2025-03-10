// DOM Elements
const currentDateElement = document.getElementById("currentDate");
const currentDay = document.getElementById("currentDay");
const timetableContainer = document.getElementById("timetableContainer");
const timeTableDay = document.getElementById("timeTableDay");
const timeDay = document.querySelector(".timeDay");
const dateInput = document.getElementById("dateInput");

let selectedSemester = 'firstSem'; // Default to first semester

// Timetable Data
const subjectsPerDayFirstSem = {
    day1: [
        { time: "9:00-9:55", subject: "MMC105 - Web Technologies (JK)" },
        { time: "9:55-10:50", subject: "MMC104 - Operating System (PL)" },
        { time: "11:10-12:05", subject: "MMC102 - Discrete Mathematics and Graph Theory (AB)" },
        { time: "12:05-1:00", subject: "MMC103 - Database Management System (RK)" },
        { time: "2:00-4:45", subject: "MMCL106 - DBMS and Web Technologies Laboratory (NH + PL)(AB)" },
    ],
    day2: [
        { time: "9:00-9:55", subject: "MMC102 - Discrete Mathematics and Graph Theory (AB)" },
        { time: "9:55-10:50", subject: "MMC104 - Operating System (PL)" },
        { time: "11:10-12:05", subject: "MMC103 - Database Management System (RK)" },
        { time: "12:05-1:00", subject: "MMC105 - Web Technologies (JK)" },
        { time: "2:00-4:45", subject: "Placement (NH / AB)" },
    ],
    day3: [
        { time: "9:00-9:55", subject: "MMC101 - Programming and Problem Solving in C (RM)" },
        { time: "9:55-10:50", subject: "MMC102 - Discrete Mathematics and Graph Theory (AB)" },
        { time: "11:10-1:00", subject: "Placement (AB)" },
        { time: "2:00-2:55", subject: "MMC104 - Operating System (PL)" },
    ],
    day4: [
        { time: "9:00-9:55", subject: "MMC104 - Operating System (PL)" },
        { time: "9:55-10:50", subject: "MMC105 - Web Technologies (JK)" },
        { time: "11:10-12:05", subject: "MMC102 - Discrete Mathematics and Graph Theory (AB)" },
        { time: "12:05-1:00", subject: "MMC101 - Programming and Problem Solving in C (AK)" },
        { time: "2:00-4:45", subject: "MMCL106 - DBMS and Web Technologies Laboratory (NH + PL)(JK + AB)" },
    ],
    day5: [
        { time: "9:00-9:55", subject: "MMC102 - Discrete Mathematics and Graph Theory (AB)" },
        { time: "9:55-10:50", subject: "MMC103 - Database Management System (NH)" },
        { time: "11:10-12:05", subject: "MMC101 - Programming and Problem Solving in C (AK)" },
        { time: "12:05-1:00", subject: "MMC104 - Operating System (PL)" },
        { time: "2:00-2:55", subject: "MMC101 - Programming and Problem Solving in C (RM)" },
    ],
    day6: [
        { time: "9:00-10:50", subject: "MMC101 - Programming and Problem Solving in C Lab (AK + RM)" },
        { time: "11:10-12:05", subject: "MMC105 - Web Technologies (JK)" },
        { time: "12:05-1:00", subject: "MMC103 - Database Management System (NH)" },
        { time: "2:00-4:45", subject: "Association Activity" },
    ],
};

const subjectsPerDayThirdSem = {
    day1: [
        { time: "9:00-9:55", subject: "22MCA31 - Data Analytics Using Python (RK)" },
        { time: "9:55-10:50", subject: "22MCA335 - NoSQL (NH)" },
        { time: "11:10-12:05", subject: "22MCA32 - Internet of Things (RM)" },
        { time: "12:05-1:00", subject: "22MCA343 - Software Testing (AK)" },
        { time: "2:00-4:45", subject: "Project Presentation (JK)" },
    ],
    day2: [
        { time: "9:00-9:55", subject: "22MCA32 - Internet of Things (RM)" },
        { time: "9:55-10:50", subject: "22MCA343 - Software Testing (AK)" },
        { time: "11:10-12:05", subject: "22MCA335 - NoSQL (NH)" },
        { time: "12:05-1:00", subject: "Placement (AB)" },
        { time: "2:00-4:45", subject: "22MCAL36 - Data Analytics Lab with Mini Project (RK + AK) / 22MCAL37 IoT Lab with Mini Project (RM + PL)" },
    ],
    day3: [
        { time: "9:00-9:55", subject: "22MCA343 - Software Testing (AK)" },
        { time: "9:55-10:50", subject: "22MCA31 - Data Analytics Using Python (RK)" },
        { time: "11:10-1:00", subject: "Societal Lab (JK + NH + PL)" },
        { time: "2:00-3:50", subject: "22MCAL36 - Data Analytics Lab with Mini Project (RK + AK) / 22MCAL37 IoT Lab with Mini Project (RM + AB)" },
    ],
    day4: [
        { time: "9:00-9:55", subject: "22MCA343 - Software Testing (AK)" },
        { time: "9:55-10:50", subject: "22MCA32 - Internet of Things (RM)" },
        { time: "11:10-12:05", subject: "22MCA335 - NoSQL (NH)" },
        { time: "12:05-1:00", subject: "Societal Presentation" },
        { time: "2:00-4:45", subject: "Internship Presentation (RK)" },
    ],
    day5: [
        { time: "9:00-9:55", subject: "22MCA32 - Internet of Things (RM)" },
        { time: "9:55-10:50", subject: "22MCA31 - Data Analytics Using Python (RK)" },
        { time: "11:10-1:00", subject: "Placement Lab (NH + AB)" },
        { time: "2:00-4:45", subject: "Project Lab (JK + PL + NH + AB)" },
    ],
    day6: [
        { time: "9:00-9:55", subject: "22MCA335 - NoSQL (NH)" },
        { time: "9:55-10:50", subject: "22MCA31 - Data Analytics Using Python (RK)" },
        { time: "11:10-1:00", subject: "Mini Project (RK + AK) (RM + AB)" },
        { time: "2:00-4:45", subject: "Association Activity" },
    ],
};

const datesToDaysMapping = {
    day1: ["06-03-2025"],
    day2: ["07-03-2025"],
    day3: ["10-03-2025"],
    day4: ["11-03-2025"],
    day5: ["12-03-2025"],
    day6: ["13-03-2025"],
};

const holidays = {
    "22-12-2024": "National Mathematics Day",
    "25-12-2024": "Christmas",
    "14-01-2025": "Makara Sankranthi",
    "26-01-2025": "Republic Day",
};
const specialEvents = {
    "14-12-2024": "Inauguration of Savarkar Sabhabhavana",
    "16-12-2024": "Commencement of Classes for 1st Year MBA & MCA",
    "06-01-2025": "Commencement of Classes for 2nd Year MBA & MCA",
    "21-01-2025": "MCA - Freshers Day",
    "06-02-2025": "IA Test 1 for 1st Semester MCA Students",
    "07-02-2025": "IA Test 1 for 1st and 3rd Semester MCA Students",
    "08-02-2025": "IA Test 1 for 1st and 3rd Semester MCA Students"

}

const theoryExamDates = {
    // Add when Necessary
}

const seeExamDates = {
    // Add when Necessary
}
// Utility Functions
function formatDate(date) {
    return date.toLocaleDateString("en-GB").replace(/\//g, '-');
}

function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

function isFirstOrThirdSaturday(date) {
    const day = date.getDay();
    const dateOfMonth = date.getDate();

    if (day === 6) {
        if (dateOfMonth >= 1 && dateOfMonth <= 7) {
            return true;
        }
        if (dateOfMonth >= 15 && dateOfMonth <= 21) {
            return true;
        }
    }
    return false;
}

function isHoliday(date) {
    const formattedDate = formatDate(date);
    if (holidays[formattedDate]) {
        return holidays[formattedDate];
    }

    if (getDayOfWeek(date) === "Sunday" || isFirstOrThirdSaturday(date)) {
        return "Holiday";
    }

    return null;
}

function getDayFromDate(date) {
    const formattedDate = formatDate(date);
    for (const [day, dates] of Object.entries(datesToDaysMapping)) {
        if (dates.includes(formattedDate)) {
            return day;
        }
    }
    return null;
}

function getSpecialEvent(date) {
    const formattedDate = formatDate(date);
    if (specialEvents[formattedDate]) {
        return specialEvents[formattedDate];
    }
    return null;
}

function getTheoryExamDate(date) {
    const formattedDate = formatDate(date);
    if (theoryExamDates[formattedDate]) {
        return theoryExamDates[formattedDate];
    }
    return null;
}

function getSeeExamDate(date) {
    const formattedDate = formatDate(date);
    if (seeExamDates[formattedDate]) {
        return seeExamDates[formattedDate];
    }
    return null;
}

function displayTimetable(date) {
    const formattedDate = formatDate(date);
    currentDateElement.innerText = `Date: ${formattedDate}`;
    currentDay.innerText = getDayOfWeek(date);

    const holiday = isHoliday(date);
    const specialEvent = getSpecialEvent(date);
    const theoryExamDate = getTheoryExamDate(date);
    const seeExamDate = getSeeExamDate(date);

    if (holiday) {
        const eventMessage = specialEvent ? `<br>Special Event: ${specialEvent}` : '';
        timetableContainer.innerHTML = `Holiday: ${holiday}` + eventMessage;
        timeDay.style.display = 'none';
        return;
    }

    // Display the special event if there is one
    if (specialEvent) {
        const eventMessage = `Special Event: ${specialEvent}`;
        timetableContainer.innerHTML += `<p>${eventMessage}</p>`;
        timeDay.style.display = 'none';
        return;
    }

    if (theoryExamDate) {
        timeDay.style.display = 'block';
        const dayKey = getDayFromDate(date);
        const timetable = subjectsPerDay[dayKey];
        timeTableDay.innerText = dayKey ? `Time Table: ${dayKey}` : "";
        const h3 = document.createElement("h3");
        h3.innerHTML = `Continuous Internal Evaluation (CIE)`;
        h3.style.textAlign = 'center';
        const table = document.createElement("table");
        table.innerHTML = `
        <tr>
            <th>Time</th>
            <th>Subject</th>
        </tr>
        `;
        for (const [time, subject] of Object.entries(theoryExamDate)) {
            const row = table.insertRow();
            row.insertCell(0).textContent = time;
            row.insertCell(1).textContent = subject;
        }
        timetableContainer.innerHTML = "";
        timetableContainer.appendChild(h3)
        timetableContainer.appendChild(table);
        return;
    }

    if (seeExamDate) {
        timeDay.style.display = 'block';
        const dayKey = getDayFromDate(date);
        const timetable = subjectsPerDay[dayKey];
        timeTableDay.innerText = dayKey ? `Time Table: ${dayKey}` : "";
        const h3 = document.createElement("h3");
        h3.innerHTML = `Semester End Evaluation (SEE)`;
        h3.style.textAlign = 'center';
        const table = document.createElement("table");
        table.innerHTML = `
        <tr>
            <th>Time</th>
            <th>Subject</th>
        </tr>
        `;
        for (const [time, subject] of Object.entries(seeExamDate)) {
            const row = table.insertRow();
            row.insertCell(0).textContent = time;
            row.insertCell(1).textContent = subject;
        }
        timetableContainer.innerHTML = "";
        timetableContainer.appendChild(h3)
        timetableContainer.appendChild(table);
        return;
    }

    timeDay.style.display = 'block';
    const dayKey = getDayFromDate(date);
    const timetable = selectedSemester === 'firstSem' ? subjectsPerDayFirstSem[dayKey] : subjectsPerDayThirdSem[dayKey];
    timeTableDay.innerText = dayKey ? `Time Table: ${dayKey}` : "";
    timetableContainer.innerHTML = "";

    if (timetable) {
        const table = document.createElement("table");
        table.innerHTML = `
      <tr>
        <th>Time</th>
        <th>Subject</th>
      </tr>
    `;
        timetable.forEach(({ time, subject }) => {
            const row = table.insertRow();
            row.insertCell(0).textContent = time;
            row.insertCell(1).textContent = subject;
        });
        timetableContainer.appendChild(table);
    } else {
        timetableContainer.textContent = `There is currently no timetable assigned for ${formattedDate}.`;
    }
}

document.getElementById("firstSemButton").addEventListener("click", () => {
    selectedSemester = 'firstSem';
    const selectedDate = new Date(dateInput.value);
    displayTimetable(selectedDate);
});

document.getElementById("thirdSemButton").addEventListener("click", () => {
    selectedSemester = 'thirdSem';
    const selectedDate = new Date(dateInput.value);
    displayTimetable(selectedDate);
});

// Event listener for date change
dateInput.addEventListener("change", (event) => {
    const selectedDate = new Date(event.target.value);
    if (!isNaN(selectedDate)) {
        displayTimetable(selectedDate);
    }
});

// Initialize with today's date
function init() {
    const today = new Date();
    dateInput.valueAsDate = today;
    displayTimetable(today);
}

init();
