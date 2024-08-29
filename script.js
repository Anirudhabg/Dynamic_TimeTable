// DOM Elements
const currentDateElement = document.getElementById("currentDate");
const currentDay = document.getElementById("currentDay");
const timetableContainer = document.getElementById("timetableContainer");
const timeTableDay = document.getElementById("timeTableDay");
const timeDay = document.querySelector(".timeDay");

// Timetable Data
const subjectsPerDay = {
    day1: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    day2: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    day3: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    day4: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    day5: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    day6: [
        { time: "9:00-9:55", subject: "NoSQL" },
        { time: "9:55-10:50", subject: "IoT" },
        { time: "11:10-12:05", subject: "Societal presentation(AK)" },
        { time: "12:05-1:00", subject: "DAP" },
        { time: "2:00-4:45", subject: "Project presentation" },
    ],
    // Other days...
};

const datesToDaysMapping = {
    day1: ["29-08-2024"],
    day2: ["30-08-2024"],
    day3: ["31-08-2024"],
    day4: ["01-09-2024"],
    day5: ["02-09-2024"],
    day6: ["03-09-2024"],
};

const holidays = {
    "26-01-2024": "Republic Day",
    "08-03-2024": "Mahashivaratri",
    "29-03-2024": "Good Friday",
    "09-04-2024": "Chandrama Ugadi",
};

// Utility Functions
function formatDate(date) {
    return date.toLocaleDateString("en-GB").replace(/\//g, '-');
}

function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

function isHoliday(date) {
    const formattedDate = formatDate(date);
    return holidays[formattedDate] || getDayOfWeek(date) === "Saturday" || getDayOfWeek(date) === "Sunday";
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
