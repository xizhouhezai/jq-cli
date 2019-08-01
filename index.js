#!/usr/bin/env node

var download = require('download-git-repo')
let projectNames = process.argv;

let projectName = null;
projectNames.forEach((element, index) => {
  if (element === 'create') {
    projectName = projectNames[index + 1];
  }
});

if (projectName) {
  var path = process.cwd()

  download('xizhouhezai/jq', path + '/' + projectName, function(err) {
    console.log(err ? 'Error' : 'Success')
  })
} else {
  console.log("请创建项目名")
}
