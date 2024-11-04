// DOM Elements
const currentDateElement = document.getElementById("currentDate");
const currentDay = document.getElementById("currentDay");
const timetableContainer = document.getElementById("timetableContainer");
const timeTableDay = document.getElementById("timeTableDay");
const timeDay = document.querySelector(".timeDay");
const dateInput = document.getElementById("dateInput");

// Timetable Data
const subjectsPerDay = {
    day1: [
        { time: "9:00-9:55", subject: "22MCA24 - Web Technologies" },
        { time: "9:55-10:50", subject: "22MCA252 - Data Mining and Business Intelligence" },
        { time: "11:10-12:05", subject: "22MCA22 - Object Oriented Programming Using Java" },
        { time: "12:05-1:00", subject: "22MCA21 - Database Management System" },
        { time: "2:00-4:45", subject: "22MCA29 - Seminar" },
    ],
    day2: [
        { time: "9:00-9:55", subject: "22MCA22 - Object Oriented Programming Using Java" },
        { time: "9:55-10:50", subject: "22MCA252 - Data Mining and Business Intelligence" },
        { time: "11:10-12:05", subject: "22MCA23 - Software Engineering" },
        { time: "12:05-1:00", subject: "22MCA24 - Web Technologies" },
        { time: "2:00-4:45", subject: "22MCAL27 - DBMS Laboratory/22MCAL28 - Java Programming Laboratory" },
    ],
    day3: [
        { time: "9:00-9:55", subject: "22MCA23 - Software Engineering" },
        { time: "9:55-10:50", subject: "22MCA21 - Database Management System" },
        { time: "11:10-12:05", subject: "22MCA263 - Mobile Application Development" },
        { time: "12:05-1:00", subject: "22MCA22 - Object Oriented Programming Using Java" },
        { time: "2:00-3:50", subject: "22MCA24 - Web Technologies Laboratory" },
    ],
    day4: [
        { time: "9:00-9:55", subject: "22MCA21 - Database Management System" },
        { time: "9:55-10:50", subject: "22MCA24 - Web Technologies" },
        { time: "11:10-12:05", subject: "22MCA263 - Mobile Application Development" },
        { time: "12:05-1:00", subject: "22MCA23 - Software Engineering" },
        { time: "2:00-4:45", subject: "22MCAL27 - DBMS Laboratory/22MCAL28 - Java Programming Laboratory" },
    ],
    day5: [
        { time: "9:00-9:55", subject: "22MCA252 - Data Mining and Business Intelligence" },
        { time: "9:55-10:50", subject: "22MCA23 - Software Engineering" },
        { time: "11:10-12:05", subject: "22MCA22 - Object Oriented Programming Using Java" },
        { time: "12:05-1:00", subject: "22MCA263 - Mobile Application Development" },
        { time: "2:00-4:45", subject: "Placement Training" },
    ],
    day6: [
        { time: "9:00-9:55", subject: "22MCA263 - Mobile Application Development" },
        { time: "9:55-10:50", subject: "22MCA252 - Data Mining and Business Intelligence" },
        { time: "11:10-12:05", subject: "22MCA23 - Software Engineering" },
        { time: "12:05-1:00", subject: "22MCA21 - Database Management System" },
        { time: "2:00-4:45", subject: "Association Activity" },
    ],
    // Other days...
};

const datesToDaysMapping = {
    day1: ["02-09-2024", "10-09-2024", "18-09-2024", "25-09-2024", "03-10-2024", "14-10-2024", "22-10-2024", "29-10-2024", "08-11-2024", "15-11-2024"],
    day2: ["03-09-2024", "11-09-2024", "19-09-2024", "26-09-2024", "04-10-2024", "15-10-2024", "23-10-2024", "30-10-2024", "09-11-2024", "19-11-2024"],
    day3: ["04-09-2024", "12-09-2024", "20-09-2024", "27-09-2024", "07-10-2024", "16-10-2024", "24-10-2024", "04-11-2024", "11-11-2024", "20-11-2024"],
    day4: ["05-09-2024", "13-09-2024", "21-09-2024", "28-09-2024", "08-10-2024", "18-10-2024", "25-10-2024", "05-11-2024", "12-11-2024", "21-11-2024"],
    day5: ["06-09-2024", "14-09-2024", "23-09-2024", "30-09-2024", "09-10-2024", "19-10-2024", "26-10-2024", "06-11-2024", "13-11-2024", "22-11-2024"],
    day6: ["09-09-2024", "17-09-2024", "24-09-2024", "01-10-2024", "10-10-2024", "21-10-2024", "28-10-2024", "07-11-2024", "14-11-2024", "23-11-2024"],
};

const holidays = {
    "07-09-2024": "Ganesh Chaturthi",
    "02-10-2024": "Gandhi Jayanthi",
    "11-10-2024": "Ayudha Pooje",
    "12-10-2024": "Vijayadashami",
    "17-10-2024": "Valmiki Jayanthi",
    "31-10-2024": "Naraka Chaturdashi",
    "01-11-2024": "Kannada Rajyothsava",
    "02-11-2024": "Balipadyami",
    "18-11-2024": "Kanakadasa Jayanthi"
};
const specialEvents = {
    "11-09-2024": "Drishti Conference",
    "16-09-2024": "Eid Milad and Workshop for Faculties",
    "05-10-2024": "Additional Day 3 for 5th and 7th Semester Students",
    "06-10-2024": "Additional Classes for 5th Semester Students",
    "10-10-2024": "Sri Ganahoma, Sri Sharadha Pooje and Ayudha Pooje @ VCET",
    "19-10-2024": "Last Working Day for 2nd Year P G Students",
    "20-10-2024": "Additional Classes for 5th Semester Students",
    "10-11-2024": "Additional Classes for 5th Semester Students",
    "24-11-2024": "Additional Classes for 5th Semester Students"
}

const theoryExamDates = {
    "14-10-2024": {
        "9:30 - 11:00 AM": "22MCA21 - Database Management System",
        "3:00 - 4:30 PM": "22MCA22 - Object Oriented Programming Using Java"
    },
    "15-10-2024": {
        "9:30 - 11:00 AM": "22MCA23 - Software Engineering",
        "3:00 - 4:30 PM": "22MCA252 - Data Mining and Business Intelligence"
    },
    "16-10-2024": {
        "9:30 - 11:00 AM": "22MCA263 - Mobile Application Development",
        "2:00 - 4:00 PM": "22MCA24 - Web Technologies"
    },
}

const seeExamDates = {
    "29-10-2024": {
        "2:00 - 5:00 PM": "22MCA21 - Database Management System"
    },
    "04-11-2024":{
        "2:00 - 5:00 PM": "22MCA22 - Object Oriented Programming Using Java"
    }
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
    const timetable = subjectsPerDay[dayKey];

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
