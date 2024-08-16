function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDiff = nextYear - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `${days}<span>Days</span>`;
    document.getElementById('hours').innerHTML = `${hours}<span>Hours</span>`;
    document.getElementById('minutes').innerHTML = `${minutes}<span>Minutes</span>`;
    document.getElementById('seconds').innerHTML = `${seconds}<span>Seconds</span>`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
