let results = {
    day: {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0
    },
    time: {
        Morning: 0,
        Afternoon: 0,
        Evening: 0
    }
};

function submitPoll() {
    const form = document.getElementById('pollForm');
    const day = form.day.value;
    const times = Array.from(form.time).filter(input => input.checked).map(input => input.value);

    if (!day || times.length === 0) {
        alert('Please select a day and at least one available time');
        return;
    }

    results.day[day]++;
    times.forEach(time => results.time[time]++);

    displayResults();
    form.reset();
}

function displayResults() {
    const bestDay = Object.keys(results.day).reduce((a, b) => results.day[a] > results.day[b] ? a : b, "N/A");
    document.getElementById('resultDay').innerText = bestDay;
    document.getElementById('resultMorning').innerText = results.time.Morning;
    document.getElementById('resultAfternoon').innerText = results.time.Afternoon;
    document.getElementById('resultEvening').innerText = results.time.Evening;

    document.getElementById('pollResults').style.display = 'block';
}
