const temperatures = [22, 27, 30, 24, 25, 28, 21];

function checkTemp() {
  let hotCount = 0;
  let avgTemp = 0;
  let sumTemp = 0;

  for (let i = 0; i < temperatures.length; i++) {
    sumTemp += temperatures[i];
    if (temperatures[i] > 25) {
      hotCount++;
    }
  }

  avgTemp = sumTemp / temperatures.length;
  let roundedAvg = Math.round(avgTemp * 10) / 10;

  console.log(`The number of hot days is ${hotCount}.`);
  console.log(`The average temperature is ${roundedAvg}C.`);
}

checkTemp();