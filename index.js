#!/usr/bin/env node

let projectNames = process.argv;

let projectName = null;
projectNames.forEach((element, index) => {
  if (element === 'create') {
    projectName = projectNames[index + 1];
  }
});

console.log(projectName)
