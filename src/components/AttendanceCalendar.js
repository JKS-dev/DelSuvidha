import { useState, useEffect } from 'react';
import './AttendanceCalendar.css'; // Import your CSS file here

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = ({ presentDates, absentDates }) => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [wobble, setWobble] = useState("0");

    useEffect(() => {
        generateCalendar(month, year);
    }, [month, year, presentDates, absentDates]);

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    const generateCalendar = (month, year) => {
        const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const calendarDays = document.querySelector('.calendar-days');
        const yearDisplay = document.getElementById('year');

        calendarDays.innerHTML = '';

        const currDate = new Date();
        const firstDay = new Date(year, month, 1);
        const dayCount = daysOfMonth[month];

        yearDisplay.innerHTML = `${monthNames[month]} ${year}`;

        for (let i = 0; i <= dayCount + firstDay.getDay() - 1; i++) {
            const day = document.createElement('div');
            if (i >= firstDay.getDay()) {
                const dayNumber = i - firstDay.getDay() + 1;
                day.classList.add('calendar-day');
                day.innerHTML = `${dayNumber}<span></span><span></span><span></span><span></span>`;

                // Format date for comparison
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;

                // Highlight the day based on the date arrays
                if (presentDates.includes(dateString)) {
                    day.classList.add('present-day');
                }
                if (absentDates.includes(dateString)) {
                    day.classList.add('absent-day');
                }
                if (dayNumber === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                    day.classList.add('currDate');
                }
                if (dayNumber === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                    day.classList.add('today-date');
                }
            }
            calendarDays.appendChild(day);
        }
    };

    const changeMonth = (increment) => {
        let newMonth = month + increment;
        let newYear = year;

        if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        }

        setMonth(newMonth);
        setYear(newYear);
    };

    return (
        <>
            <div className="totalDaysPresent w-full"></div>
            <div className={`calendar ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="calendar-header">
                    <div className="yearPicker">
                        <span className="yearChange left" onClick={() => { changeMonth(-1); setWobble(-1); }}><pre>&lt;</pre></span>
                        <span id="year" className="year" wobble={wobble} onClick={() => document.querySelector('.month-list').classList.add('show')}>{monthNames[month]} {year}</span>
                        <span className="yearChange" onClick={() => { changeMonth(1); setWobble(1); }}><pre>&gt;</pre></span>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="calendar-week-day">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="calendar-days" wobble={wobble} onAnimationEnd={() => setWobble("0")}></div>
                </div>
                <div className="month-list">
                    {monthNames.map((name, index) => (
                        <div key={index}>
                            <div data-month={index} onClick={() => {
                                setMonth(index);
                                document.querySelector('.month-list').classList.remove('show');
                            }}>
                                {name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
