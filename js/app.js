import { FileHelper } from "./components/FileHelper.js";
import { Driver } from "./components/Driver.js";
import { Trip } from "./components/Trip.js";

const textFileToRead = "input.txt";
const commandLines = convertTextFileToCommandLines();

function convertTextFileToCommandLines() {
  const fileHelper = new FileHelper();
  const input = fileHelper.readStringFromFile("../" + textFileToRead);

  return input.split(/\n/);
}

function runApp() {}

export function createInstanceFromCommandLine(line) {
  const words = line.split(" ");
  const command = words[0];
  let args = [];

  for (let i = 1; i < words.length; i++) {
      args.push(words[i]);
  }

  if (command === driver) {
      
  }
}
