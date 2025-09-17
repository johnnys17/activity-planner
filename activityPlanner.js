// Daily Activity Planner - practicing javascript variables and conditionals

/* this program plans a daily activity by storing its name and duration, 
categorizing its intensity,
and displaying a plan using variables and conditionals */

const activityName = "Yoga";
let duration = 45;
const missingActivity = undefined;


// categorize activity intensity based on duration
const intensity = duration <= 30 ? "Light" : "Moderate";
const isValidDuration = typeof duration === "number" && duration > 0;


// calculate activity duratino facts
let totalMinutes = duration;
totalMinutes = totalMinutes += 15;
const hours = totalMinutes / 60;
const remainderMinutes = totalMinutes % 60;


// round the hours for display
const roundedHours = Math.round(hours);


/* display the daily
activity plan with
formatted output */

console.log(`Activity: ${activityName.toUpperCase()}`);
console.log(`Duration: ${duration}`);
console.log(`Intensity: ${intensity}`);
console.log(`Total time(hours): ${roundedHours}`);


// check activity validity and missing data
switch (isValidDuration) {
    case true:
        console.log("Valid duration: " + isValidDuration);
        break;
    case false:
        console.log("Invalid duration!");
}

console.log("Missing Activity: " + missingActivity);