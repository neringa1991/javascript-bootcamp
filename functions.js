// Write 3 functions of your choice that will have following in any of them:

// - First function: If statements
// - Second function: Function takes at least 3 arguments.
// - Third function: Use Object key & value pairs in it.

// All functions should return the value.

const greeting = (hour, name) => {
  if (hour >= 12 && hour < 18) {
    const greeting = alert(`Good day, ${name}. We are open`);
    return greeting;
  } else if (hour < 12 && hour >= 0) {
    return alert(`Good morning, ${name}. We are closed`);
  }
  return alert(`Good evening, ${name}. We are closed`);
};
greeting(17, "Neringa");

const weekdaysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayDate = (arr) => {
  const today = new Date().getDay();
  const weekDay = arr[today];
  return [today, weekDay];
};

const greetingMessage = (hour, name, arr) => {
  const weekDay = todayDate(arr)[1];
  const today = todayDate(arr)[0];

  if (hour >= 12 && hour < 18 && today !== 0) {
    return console.log(
      `Good day, ${name}. Today is ${weekDay} and we are open`
    );
  } else if (hour < 12 && hour >= 0) {
    return console.log(`Good morning, ${name}. We are closed`);
  }
  return console.log(`Good evening, ${name}. We are closed`);
};

greetingMessage(17, "Neringa", weekdaysArr);

const workingTimesArr = [
  "12-15h",
  "12-18h",
  "12-18h",
  "12-18h",
  "12-18h",
  "12-18h",
  "12-15h",
];

const greetingWorkingHours = (workingTimes, workingDays) => {
  const weekDay = todayDate(weekdaysArr)[1];

  const workingSchedule = {
    Sunday: workingTimes[0],
    Monday: workingTimes[1],
    Tuesday: workingTimes[2],
    Wednesday: workingTimes[3],
    Thursday: workingTimes[4],
    Friday: workingTimes[5],
    Saturday: workingTimes[6],
  };

  return console.log(
    `Today is ${weekDay} and our working hours are ${workingSchedule[weekDay]}`
  );
};
greetingWorkingHours(workingTimesArr, weekdaysArr);
