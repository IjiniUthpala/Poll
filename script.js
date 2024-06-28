let results = {   // the global variable
    day: {},
    time: {
        Morning: 0,
        Afternoon: 0,
        Evening: 0
    }
};

function submitPoll() {  //Function02 handle the form submission
    const form = document.getElementById('pollForm');
    const day = form.day.value;
    const times = Array.from(form.querySelectorAll('input[name="time"]:checked')).map(input => input.value);

    if (!day || times.length === 0) {
        alert('Please select a day and at least one available time');
        return;
    }

    if (!results.day[day]) {
        results.day[day] = 0;
    }
    results.day[day]++;
    
    times.forEach(time => {
        results.time[time]++;
    });

    displayResults();
    form.reset();
}

function displayResults() {   //Function01 display the final results in the web
    const bestDay = Object.keys(results.day).reduce((a, b) => results.day[a] > results.day[b] ? a : b, "N/A");
    document.getElementById('resultDay').innerText = `Best Day: ${bestDay}`;
    document.getElementById('resultMorning').innerText = `Morning: ${results.time.Morning} votes`;
    document.getElementById('resultAfternoon').innerText = `Afternoon: ${results.time.Afternoon} votes`;
    document.getElementById('resultEvening').innerText = `Evening: ${results.time.Evening} votes`;

    document.getElementById('pollResults').style.display = 'block';
}
