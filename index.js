function updateclock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    // Update the clock element with the current time
    document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateclock, 1000);

// Initial call to display the clock immediately
updateclock();
