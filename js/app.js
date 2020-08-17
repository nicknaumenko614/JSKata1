import { FileHelper } from "./components/FileHelper.js";
import { Driver } from "./components/Driver.js";
import { Trip } from "./components/Trip.js";

const textFileToRead = "input.txt";
const commandLines = convertTextFileToCommandLines();
export let drivers = [];
export let trips = [];

function convertTextFileToCommandLines() {
  const fileHelper = new FileHelper();
  const input = fileHelper.readStringFromFile("../" + textFileToRead);

  return input.split(/\r\n/);
}

function runApp() {
  commandLines.forEach((line) => {
    const instance = createInstanceFromCommandLine(line);
    sortInstance(instance);
  });
}

export function sortInstance(instance) {
  if (instance instanceof Driver) drivers.push(instance);
  if (instance instanceof Trip) {
    trips.push(instance);
  }
}

export function createInstanceFromCommandLine(line) {
  const words = line.split(" ");
  const command = words[0];
  let args = [];

  for (let i = 1; i < words.length; i++) {
    args.push(words[i]);
  }

  if (command === "Driver") {
    return new Driver(args[0]);
  }
  if (command === "Trip") {
    return new Trip(args[0], args[1], args[2], args[3]);
  }
}

runApp();
