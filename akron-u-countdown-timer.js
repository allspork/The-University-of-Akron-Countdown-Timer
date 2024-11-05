
function updateCountdown() {
  const targetDate = new Date('December 14, 2024 09:00:00 EST').getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference < 0) {
    document.getElementById('countdown').innerHTML = '<div>Event has passed</div>';
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately
