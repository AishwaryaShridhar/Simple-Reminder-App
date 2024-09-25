function setReminder() {
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const activity = document.getElementById("activity").value;

    if (day && time && activity) {
        const reminderMessage = `Reminder set for ${day} at ${time} to ${activity}.`;  // Fixed template literal
        document.getElementById("reminderMessage").innerHTML = reminderMessage;

        // Calculate the time difference between current time and selected time
        const now = new Date();
        const [hours, minutes] = time.split(":").map(Number); // Convert to numbers
        const reminderTime = new Date();
        reminderTime.setHours(hours, minutes, 0);

        const timeDifference = reminderTime - now;

        if (timeDifference > 0) {
            setTimeout(() => {
                playChime();
                alert(`It's time to ${activity}!`);  // Fixed template literal
            }, timeDifference);
        } else {
            alert("The selected time is in the past. Please choose a future time.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}

function playChime() {
    const audio = new Audio("sound.wav");  // Ensure the path to your chime sound file is correct
    audio.play();
}
