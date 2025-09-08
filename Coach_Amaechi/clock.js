function updateClock() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
  }
  const div = document.getElementById("clock");
    if (!div) {
        console.error("Clock element not found");
        return;
    }
    if (hours > 12) {
        hours -= 12;
    }
  div.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
