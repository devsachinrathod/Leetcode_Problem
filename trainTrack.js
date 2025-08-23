// Train data (in 24-hour format)
const trains = [
    { trainNumber: "101", arrival: "08:30", departure: "09:10" },
    { trainNumber: "102", arrival: "09:15", departure: "09:45" },
    { trainNumber: "103", arrival: "10:00", departure: "10:30" },
    { trainNumber: "104", arrival: "10:40", departure: "11:10" },
    { trainNumber: "105", arrival: "11:20", departure: "11:50" },
];

// Convert time string to minutes since midnight
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
}

// Convert minutes back to HH:MM format
function minutesToTime(mins) {
    const hours = Math.floor(mins / 60).toString().padStart(2, '0');
    const minutes = (mins % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Calculate and display train duration and frequency
function processTrainSchedule(trains) {
    let frequencyMap = {}; // Stores train counts per hour

    console.log("Train Schedule Details:");
    trains.forEach(train => {
        const arrivalMins = timeToMinutes(train.arrival);
        const departureMins = timeToMinutes(train.departure);
        const duration = departureMins - arrivalMins;

        // Count train frequency per hour
        const hour = Math.floor(arrivalMins / 60);
        frequencyMap[hour] = (frequencyMap[hour] || 0) + 1;

        console.log(`Train ${train.trainNumber} stays for ${duration} minutes (From ${train.arrival} to ${train.departure})`);
    });

    console.log("\nTrain Frequency per Hour:");
    for (let hour in frequencyMap) {
        console.log(`${hour}:00 - ${parseInt(hour) + 1}:00 => ${frequencyMap[hour]} train(s)`);
    }
}

// Run the program
processTrainSchedule(trains);
