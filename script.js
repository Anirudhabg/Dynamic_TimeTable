// DOM Elements
const currentDateElement = document.getElementById("currentDate");
const currentDay = document.getElementById("currentDay");
const timetableContainer = document.getElementById("timetableContainer");
const timeTableDay = document.getElementById("timeTableDay");
const timeDay = document.querySelector(".timeDay");

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
    day1: ["02-09-2024", "10-09-2024", "18-09-2024", "25-09-2024"],
    day2: ["03-09-2024", "11-09-2024", "19-09-2024", "26-09-2024"],
    day3: ["04-09-2024", "12-09-2024", "20-09-2024", "27-09-2024"],
    day4: ["05-09-2024", "13-09-2024", "21-09-2024", "28-09-2024"],
    day5: ["06-09-2024", "14-09-2024", "23-09-2024", "30-09-2024"],
    day6: ["09-09-2024", "17-09-2024", "24-09-2024", "01-10-2024"],
};

const holidays = {
    "07-09-2024": "Ganesh Chaturthi",
    "16-09-2024": "Eid Milad and Workshop for Faculties",

};

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
        // if (dateOfMonth >= 15 && dateOfMonth <= 21) {
        //     return true;
        // }
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

function displayTimetable(date) {
    const formattedDate = formatDate(date);
    currentDateElement.innerText = `Date: ${formattedDate}`;
    currentDay.innerText = getDayOfWeek(date);

    const holiday = isHoliday(date);
    if (holiday) {
        timetableContainer.textContent = `Holiday: ${holiday}`;
        timeDay.style.display = 'none';
        return;
    }

    timeDay.style.display = 'block';
    const dayKey = getDayFromDate(date);
    const timetable = subjectsPerDay[dayKey];

    timeTableDay.innerText = dayKey ? dayKey : "No Timetable";
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
        timetableContainer.textContent = "No timetable for today.";
    }
}

// Initialize
function init() {
    const today = new Date();
    displayTimetable(today);
}

init();
